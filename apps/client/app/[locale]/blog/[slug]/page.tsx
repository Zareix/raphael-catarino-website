import { getStrapiMediaUrl, queryStrapiAPIPlural } from "@helpers/strapi";
import { createPlaceholder } from "@helpers/plaiceholder";
import { StrapiBlogPost } from "@models/strapi/StrapiBlogPost";
import { BlogPost } from "@models/BlogPost";
import Post from "@components/Blog/Posts/Post";
import { notFound } from "next/navigation";

const locales = ["fr", "en"];

export async function generateStaticParams() {
  const blogPosts = await Promise.all(
    locales.map(async (locale) => ({
      posts: await queryStrapiAPIPlural<StrapiBlogPost>(locale, "blog-posts"),
      locale,
    }))
  );

  return blogPosts
    .map((data) => {
      return data.posts.data.map((post) => ({
        slug: post.attributes.slug,
        locale: data.locale,
      }));
    })
    .flat();
}

async function getBlogPost(
  locale: string,
  slug: string
): Promise<{
  post?: BlogPost;
  recentPosts: BlogPost[];
}> {
  const postRes = (
    await queryStrapiAPIPlural<StrapiBlogPost>(locale, "blog-posts", {
      "filters[slug][$eq]": slug,
    })
  )?.data[0];

  if (!postRes) return { recentPosts: [] };

  const post = {
    ...postRes.attributes,
    id: postRes.id,
  };

  const recentPosts = (
    await queryStrapiAPIPlural<StrapiBlogPost>(locale, "blog-posts", {
      sort: "publishedAt:desc",
      "pagination[pageSize]": 5,
    })
  ).data
    .map((post) => ({
      ...post.attributes,
      id: post.id,
    }))
    .filter((p) => p.id !== post.id);

  return {
    post: {
      ...post,
      featuredImage: {
        ...post.featuredImage.data.attributes,
        url: getStrapiMediaUrl(post.featuredImage.data.attributes.url),
        placeHolder: await createPlaceholder(
          post.featuredImage.data.attributes.url
        ),
      },
    },
    recentPosts: await Promise.all(
      recentPosts.map(async (post) => ({
        ...post,
        featuredImage: {
          ...post.featuredImage.data.attributes,
          url: getStrapiMediaUrl(post.featuredImage.data.attributes.url),
          placeHolder: await createPlaceholder(
            post.featuredImage.data.attributes.url
          ),
        },
      }))
    ),
  };
}

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getBlogPost(params.locale, params.slug);
  if (!data.post) notFound();
  return (
    <Post
      post={data.post}
      recentPosts={data.recentPosts}
      locale={params.locale}
    />
  );
}
