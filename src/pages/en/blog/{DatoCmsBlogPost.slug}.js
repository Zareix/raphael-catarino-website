import React from "react"

import { graphql } from "gatsby"
import BlogPost from "../../../components/blog/blog-post/BlogPost"

const BlogPostEn = ({ data, location }) => {
  return <BlogPost data={data} location={location} />
}

export default BlogPostEn

export const query = graphql`
  query BlogPostEn($id: String, $locale: String = "en") {
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
