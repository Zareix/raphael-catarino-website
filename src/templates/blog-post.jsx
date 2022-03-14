import React from "react";

import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";

import PostBody from "../components/blog/blog-post/PostBody";
import Layout from "../components/blog/layout/Layout";
import PostHeader from "../components/blog/blog-post/PostHeader";
import useScroll from "../components/hooks/use-scroll";
import CmsDataContext from "../components/utils/context/data-context";

const Content = styled.section`
  width: 75%;
  max-width: 800px;
  margin: 0 1rem;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 3rem auto 0rem auto;
    max-width: 100%;
    width: ${(props) =>
      props.scrollAmount >= 250
        ? "100%"
        : Math.round(((props.scrollAmount * 100) / 200 / 100) * 20) + 85 + "%"};
    border-radius: ${(props) =>
      props.scrollAmount >= 100
        ? "0px"
        : 16 -
          Math.round(((props.scrollAmount * 100) / 100 / 100) * 16) +
          "px"};
  }
`;

const BlogPost = ({ data, location }) => {
  const { scrollAmount } = useScroll();

  const cmsData = {
    pageLocation: location,
    allBlogPosts: data.allPosts.latestPosts,
    blogPost: data.post,
    settings: data.settings,
    layout: {
      navbar: {
        links: data.settings.navLinks,
        labelContactLink: data.settings.navLabelContactLink,
        contactBtnVisible: data.settings.navContactBtnVisible,
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
      <HelmetDatoCms favicon={data.site.favicon} seo={data.post.seo} />
      <Layout sidePanel langSlug={"blog"}>
        <Content
          scrollAmount={scrollAmount}
          className="bg-white pb-10 shadow-md dark:bg-gray-800 md:pb-0"
        >
          <PostHeader />
          <PostBody />
        </Content>
      </Layout>
    </CmsDataContext.Provider>
  );
};

export default BlogPost;

export const queryBlogPost = graphql`
  query BlogPost($id: String, $locale: String) {
    site: datoCmsSite(locale: { eq: $locale }) {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }

    settings: datoCmsBlogIndex(locale: { eq: $locale }) {
      navLinks {
        label
        target
      }
      navContactBtnVisible
      navLabelContactLink
      dateText
      updatedDateText
      copiedMessage
    }

    post: datoCmsBlogPost(id: { eq: $id }, locale: { eq: $locale }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
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
      content {
        value
        blocks {
          __typename
          ... on DatoCmsBlogPostImage {
            id: originalId
            imageTitle
            image {
              gatsbyImageData(placeholder: TRACED_SVG, width: 1000)
              alt
              title
            }
          }
          ... on DatoCmsBlogPostAside {
            id: originalId
            content
          }
        }
      }
      featuredImage {
        gatsbyImageData(placeholder: TRACED_SVG, width: 1000)
        alt
        title
      }
    }

    allPosts: allDatoCmsBlogPost(
      filter: { locale: { eq: $locale } }
      limit: 4
      sort: { fields: publishDate, order: DESC }
    ) {
      latestPosts: edges {
        node {
          id
          title
          publishDate(formatString: "DD/MM/YYYY", locale: $locale)
          slug
          featuredImage {
            gatsbyImageData(placeholder: TRACED_SVG, width: 300)
            alt
            title
          }
        }
      }
    }

    footer: datoCmsFooter(locale: { eq: $locale }) {
      footerMessage
    }

    layout: datoCmsLayout(locale: { eq: $locale }) {
      ...SkipToMain
    }

    contact: datoCmsContactForm(locale: { eq: $locale }) {
      ...Contact
    }
  }
`;
