import Post from "@components/Blog/Posts";
import IntlProviderWrapper from "@components/IntlProviderWrapper/IntlProviderWrapper";
import SEO from "@components/SEO";
import { createPlaceholder } from "@helpers/plaiceholder";
import { getStrapiMediaUrl, queryStrapiAPIPlural } from "@helpers/strapi";
import { BlogPost } from "@models/BlogPost";
import { StrapiBlogPost } from "@models/strapi/StrapiBlogPost";
import { GetStaticPaths, GetStaticPropsContext } from "next";

export const getStaticPaths: GetStaticPaths = async (context) => {
  const blogPosts = await queryStrapiAPIPlural<StrapiBlogPost>(
    "fr",
    "blog-posts"
  );

  if (!context.locales)
    return { paths: [{ params: { slug: "404" } }], fallback: false };

  return {
    paths: context.locales
      .map((locale) =>
        blogPosts.data.map((blogPost) => ({
          params: { slug: blogPost.attributes.slug },
          locale,
        }))
      )
      .flat(),
    fallback: false,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ slug: string; id: string }>
) => {
  const slug = context.params?.slug;

  const postRes = (
    await queryStrapiAPIPlural<StrapiBlogPost>(
      context.locale ?? "fr",
      "blog-posts",
      {
        "filters[slug][$eq]": slug,
      }
    )
  ).data[0];

  const post = {
    ...postRes.attributes,
    id: postRes.id,
  };

  const recentPosts = (
    await queryStrapiAPIPlural<StrapiBlogPost>(
      context.locale ?? "fr",
      "blog-posts",
      {
        sort: "publishedAt:desc",
        "pagination[pageSize]": 5,
      }
    )
  ).data
    .map((post) => ({
      ...post.attributes,
      id: post.id,
    }))
    .filter((p) => p.id !== post.id);

  return {
    props: {
      locale: context.locale,
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
      recentPosts,
    },
  };
};

type BlogPostPageProps = {
  locale: string;
  post: BlogPost;
  recentPosts: BlogPost[];
};

const BlogPostPage = ({ locale, post, recentPosts }: BlogPostPageProps) => (
  <IntlProviderWrapper locale={locale}>
    <SEO title={`RC | ${post.title}`} description={post.description} />
    <Post post={post} recentPosts={recentPosts} />
  </IntlProviderWrapper>
);

export default BlogPostPage;
