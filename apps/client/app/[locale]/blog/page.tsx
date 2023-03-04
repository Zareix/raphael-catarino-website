import { getStrapiMediaUrl, queryStrapiAPIPlural } from "@helpers/strapi";
import { createPlaceholder } from "@helpers/plaiceholder";
import Blog from "@components/Blog";
import { StrapiBlogPost } from "@models/strapi/StrapiBlogPost";
import { BlogPost } from "@models/BlogPost";

async function getRecentBlogPosts(locale: string): Promise<BlogPost[]> {
  const recentPosts = await queryStrapiAPIPlural<StrapiBlogPost>(
    locale ?? "fr",
    "blog-posts",
    {
      sort: "publishedAt:desc",
    }
  );

  return await Promise.all(
    recentPosts.data.map(async (post) => ({
      ...post.attributes,
      id: post.id,
      featuredImage: {
        ...post.attributes.featuredImage.data.attributes,
        url: getStrapiMediaUrl(
          post.attributes.featuredImage.data.attributes.url
        ),
        placeHolder: await createPlaceholder(
          post.attributes.featuredImage.data.attributes.url
        ),
      },
    }))
  );
}

type Props = {
  params: {
    locale: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getRecentBlogPosts(params.locale);
  return <Blog recentPosts={data} locale={params.locale} />;
}
