import React from "react"

import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import styled from "styled-components"

import PostBody from "../components/blog/blog-post/PostBody"
import Layout from "../components/blog/layout/Layout"
import PostHeader from "../components/blog/blog-post/PostHeader"
import useScroll from "../components/hooks/use-scroll"

const Content = styled.section`
  width: 75%;
  margin: 3rem;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: ${(props) =>
      props.scrollAmount >= 200
        ? "100%"
        : Math.round(((props.scrollAmount * 100) / 200 / 100) * 20) + 85 + "%"};
    margin: 0 auto;
    margin-top: 7rem;
    border-radius: ${(props) =>
      props.scrollAmount >= 100
        ? "0px"
        : 16 -
          Math.round(((props.scrollAmount * 100) / 100 / 100) * 16) +
          "px"};
  }
`

const BlogPost = ({
  data: { site, post, footer, contact, allDatoCmsBlogPost },
  location,
}) => {
  const { scrollAmount } = useScroll()
  return (
    <>
      <HelmetDatoCms favicon={site.favicon} seo={post.seo} />
      <Layout
        footerData={footer}
        contactData={contact}
        latestPosts={allDatoCmsBlogPost.latestPosts}
        currentPostId={post.id}
        location={location}
        sidePanel
        langSlug={"blog"}
      >
        <Content
          scrollAmount={scrollAmount}
          className="bg-white dark:bg-gray-800 shadow-md pb-10 md:pb-0"
        >
          <PostHeader
            title={post.title}
            subtitle={post.subtitle}
            featuredImage={post.featuredImage}
            author={post.author}
            publishDate={post.publishDate}
            updateDate={post.updateDate}
          />
          <PostBody content={post.content} />
        </Content>
      </Layout>
    </>
  )
}

export default BlogPost

export const queryBlogPost = graphql`
  query BlogPost($id: String, $locale: String) {
    site: datoCmsSite(locale: { eq: $locale }) {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    post: datoCmsBlogPost(id: { eq: $id }, locale: { eq: $locale }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      title
      subtitle
      slug
      author
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
              gatsbyImageData(placeholder: TRACED_SVG, width: 800)
              alt
              title
            }
          }
          ... on DatoCmsBlogCodeBlock {
            id: originalId
            code
            language
            highlightedLines
          }
        }
      }
      featuredImage {
        gatsbyImageData(placeholder: TRACED_SVG, width: 500)
        alt
        title
      }
    }

    allDatoCmsBlogPost(
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
        }
      }
    }

    footer: datoCmsFooter(locale: { eq: $locale }) {
      footerMessage
    }

    contact: datoCmsContactForm(locale: { eq: $locale }) {
      ...Contact
    }
  }
`
