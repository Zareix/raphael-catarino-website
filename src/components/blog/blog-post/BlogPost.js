import React from "react"

import { HelmetDatoCms } from "gatsby-source-datocms"

import PostBody from "./PostBody"
import Layout from "../layout/Layout"
import PostHeader from "./PostHeader"

const BlogPost = ({
  data: { site, post, footer, contact, allDatoCmsBlogPost },
  location,
}) => {
  return (
    <Layout
      footerData={footer}
      contactData={contact}
      latestPosts={allDatoCmsBlogPost.latestPosts}
      currentPostId={post.id}
      location={location}
    >
      <HelmetDatoCms favicon={site.favicon} seo={post.seo} />
      <PostHeader
        title={post.title}
        subtitle={post.subtitle}
        featuredImage={post.featuredImage}
        author={post.author}
        publishDate={post.publishDate}
        updateDate={post.updateDate}
      />
      <PostBody content={post.content} />
    </Layout>
  )
}

export default BlogPost
