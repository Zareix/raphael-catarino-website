import Blog from "@components/Blog";
import IntlProviderWrapper from "@components/IntlProviderWrapper/IntlProviderWrapper";
import SEO from "@components/SEO";
import { createPlaceholder } from "@helpers/plaiceholder";
import { getStrapiMediaUrl, queryStrapiAPIPlural } from "@helpers/strapi";
import { BlogPost } from "@models/BlogPost";
import { StrapiBlogPost } from "@models/strapi/StrapiBlogPost";
import { GetStaticPropsContext, NextPage } from "next";

type BlogPostPageProps = {
  locale: string;
  recentPosts: BlogPost[];
};

const BlogIndexPage: NextPage<BlogPostPageProps> = (props) => (
  <IntlProviderWrapper locale={props.locale}>
    <SEO />
    <Blog {...props} />
  </IntlProviderWrapper>
);

export async function getStaticProps({
  locale,
}: GetStaticPropsContext): Promise<{
  props: BlogPostPageProps;
}> {
  const recentPosts = await queryStrapiAPIPlural<StrapiBlogPost>(
    locale ?? "fr",
    "blog-posts",
    {
      "pagination[pageSize]": 5,
    }
  );

  return {
    props: {
      locale: locale ?? "fr",
      recentPosts: await Promise.all(
        recentPosts.data.map(async (post) => ({
          ...post.attributes,
          id: post.id.toString(),
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
      ),
    },
  };
}

export default BlogIndexPage;
