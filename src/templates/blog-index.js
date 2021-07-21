import React, { useState } from "react"

import { graphql, Link } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Layout from "../components/blog/layout/Layout"
import PostHeader from "../components/blog/blog-post/PostHeader"
import styled from "styled-components"

const BlogList = styled.section`
  margin: auto;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Post = styled(Link)`
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 1rem;

  @media (max-width: 768px) {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`

const BlogIndex = ({
  data: { site, indexData, footer, contact, allDatoCmsBlogPost },
  location,
}) => {
  const [shownItems, setShownItems] = useState(indexData.defaultShowMore)

  const showMore = () => setShownItems(shownItems + indexData.stepShowMore)

  return (
    <>
      <HelmetDatoCms favicon={site.favicon} seo={indexData.seo} />
      <Layout
        footerData={footer}
        contactData={contact}
        location={location}
        isIndex
        langSlug={"blog"}
      >
        <h1 className="text-center text-3xl mt-12 mb-6 font-bold">
          {indexData.title}
        </h1>
        <h2 className="text-lg text-gray-600 dark:text-gray-400 w-4/5 mx-auto">
          {indexData.subtitle}
        </h2>
        <BlogList>
          {allDatoCmsBlogPost.allPosts
            .slice(0, shownItems)
            .map(({ node: post }) => (
              <Post
                key={post.id}
                className="bg-white dark:bg-gray-800 shadow-md"
                to={post.slug}
              >
                <PostHeader
                  title={post.title}
                  subtitle={post.subtitle}
                  featuredImage={post.featuredImage}
                  author={post.author}
                  publishDate={post.publishDate}
                  updateDate={post.updateDate}
                  smallImage
                />
              </Post>
            ))}
          {shownItems < allDatoCmsBlogPost.allPosts.length && (
            <button
              onClick={showMore}
              className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600 dark:focus:ring-offset-blue-400 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
            >
              {indexData.showMoreLabel}
            </button>
          )}
        </BlogList>
      </Layout>
    </>
  )
}

export default BlogIndex

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
      defaultShowMore
      stepShowMore
      showMoreLabel
    }

    allDatoCmsBlogPost(
      filter: { locale: { eq: $locale } }
      sort: { fields: publishDate, order: DESC }
    ) {
      allPosts: edges {
        node {
          id
          title
          subtitle
          slug
          author
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

    footer: datoCmsFooter(locale: { eq: $locale }) {
      footerMessage
    }

    contact: datoCmsContactForm(locale: { eq: $locale }) {
      ...Contact
    }
  }
`
