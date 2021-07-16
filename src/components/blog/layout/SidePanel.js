import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const BlogPost = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const SidePanel = ({ latestPosts, currentPostId, location }) => {
  return (
    <div className="w-1/4 hidden md:block sticky top-10">
      <section className="mt-12 py-4 bg-white dark:bg-gray-800  shadow-md rounded-2xl overflow-hidden">
        <h2 className="mx-3 mb-3 font-bold text-xl text-center">
          Les derniers posts
        </h2>
        {latestPosts
          .filter(({ node: p }) => p.id !== currentPostId)
          .map(({ node: p }) => (
            <BlogPost
              to={location.pathname.match(/(\/(..))/)[1] + "/blog/" + p.slug}
              className="hover:bg-gray-100"
              key={p.id}
            >
              <h3 className="text-lg">{p.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {p.publishDate}
              </p>
            </BlogPost>
          ))}
      </section>
    </div>
  )
}

export default SidePanel
