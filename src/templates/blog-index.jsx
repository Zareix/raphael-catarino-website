import React, { useState } from "react";

import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";

import Layout from "../components/blog/layout/Layout";

import NoPostSvg from "../images/svg/no_posts.svg";
import CmsDataContext from "../components/utils/context/data-context";
import PostAuthorsList from "../components/blog/blog-post/PostAuthorsList";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogList = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Post = styled(Link)`
  width: 40%;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 90%;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

const Empty = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  min-height: 30rem;
  text-align: center;
  font-size: 1.2rem;
`;

const BlogIndex = ({ data, location }) => {
  const [shownItems, setShownItems] = useState(data.indexData.defaultShowMore);

  const showMore = () =>
    setShownItems(shownItems + data.indexData.stepShowMore);

  const cmsData = {
    pageLocation: location,
    allBlogPosts: data.allPosts.latestPosts,
    settings: data.indexData,
    layout: {
      navbar: {
        links: data.indexData.navLinks,
        labelContactLink: data.indexData.navLabelContactLink,
        contactBtnVisible: data.indexData.navContactBtnVisible,
        blogBtnVisible: false,
        labelBlogLink: "",
      },
      footer: {
        message: data.footer.footerMessage,
      },
      skipToMain: data.layout.skipToMainButtonText,
    },
    contact: data.contact,
  };

  return (
    <CmsDataContext.Provider value={cmsData}>
      <HelmetDatoCms favicon={data.site.favicon} seo={data.indexData.seo} />
      <Layout isIndex langSlug={"blog"}>
        <h1 className="mt-20 mb-6 text-center text-3xl font-bold md:mt-12">
          {data.indexData.title}
        </h1>
        <h2 className="mx-auto w-4/5 text-lg text-gray-600 dark:text-gray-400">
          {data.indexData.subtitle}
        </h2>
        <BlogList>
          {data.allPosts.latestPosts.length === 0 && (
            <Empty id="noPosts">
              <NoPostSvg className="h-48 max-w-full" />
              <p className="mt-2">{data.indexData.noPostMessage}</p>
            </Empty>
          )}
          {data.allPosts.latestPosts
            .slice(0, shownItems)
            .map(({ node: post }) => (
              <Post
                key={post.id}
                className="bg-white shadow-md dark:bg-gray-800"
                to={post.slug}
              >
                <>
                  <GatsbyImage
                    image={post.featuredImage.gatsbyImageData}
                    alt={post.featuredImage.alt}
                    title={post.featuredImage.title}
                    className="h-52 w-full"
                    objectFit="cover"
                  />
                  <div className="mx-10 mt-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <h2 className="my-2 text-xl font-semibold text-gray-500 dark:text-gray-300">
                      {post.subtitle}
                    </h2>
                    <div className="flex flex-col flex-wrap gap-1 md:flex-row md:items-center">
                      <PostAuthorsList authors={post.authors} />{" "}
                      <div className="flex w-full gap-1 text-sm text-gray-500 dark:text-gray-400">
                        {post.publishDate}
                        {post.updateDate && (
                          <>
                            <b>·</b>
                            <span>MaJ : {post.updateDate}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              </Post>
            ))}
          {shownItems < data.allPosts.latestPosts.length && (
            <button
              onClick={showMore}
              className="mt-4 rounded-full bg-blue-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600 dark:focus:ring-offset-blue-400"
            >
              {data.indexData.showMoreLabel}
            </button>
          )}
        </BlogList>
      </Layout>
    </CmsDataContext.Provider>
  );
};

export default BlogIndex;

export const queryBlogIndex = graphql`
  query BlogIndex($locale: String) {
    site: datoCmsSite(locale: { eq: $locale }) {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }

    indexData: datoCmsBlogIndex(locale: { eq: $locale }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      navLinks {
        label
        target
      }
      navContactBtnVisible
      navLabelContactLink
      defaultShowMore
      stepShowMore
      showMoreLabel
      dateText
      updatedDateText
      noPostMessage
    }

    allPosts: allDatoCmsBlogPost(
      filter: { locale: { eq: $locale } }
      sort: { fields: publishDate, order: DESC }
    ) {
      latestPosts: edges {
        node {
          id
          title
          subtitle
          slug
          authors {
            name
            profilPicture {
              gatsbyImageData(placeholder: TRACED_SVG, width: 50)
              alt
              title
            }
          }
          publishDate(formatString: "DD/MM/YYYY", locale: $locale)
          updateDate(formatString: "DD/MM/YYYY", locale: $locale)
          featuredImage {
            gatsbyImageData(placeholder: TRACED_SVG, width: 500)
            alt
            title
          }
        }
      }
    }

    layout: datoCmsLayout(locale: { eq: $locale }) {
      ...SkipToMain
    }

    footer: datoCmsFooter(locale: { eq: $locale }) {
      footerMessage
    }

    contact: datoCmsContactForm(locale: { eq: $locale }) {
      ...Contact
    }
  }
`;
