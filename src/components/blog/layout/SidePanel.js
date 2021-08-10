import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import useWindowWidth from "../../hooks/use-window-width"

const BlogPost = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`

const SidePanel = ({ latestPosts, currentPostId, location }) => {
  const { isMobile } = useWindowWidth()

  if (isMobile) return <></>
  return (
    <section className="w-1/4" id="sidePanel">
      <div className="sticky top-24">
        <article className="mt-12 py-4 bg-white dark:bg-gray-800  shadow-md rounded-2xl overflow-hidden ">
          <h2 className="mx-3 mb-3 font-bold text-xl text-center">
            Les derniers posts
          </h2>
          {latestPosts
            .filter(({ node: p }) => p.id !== currentPostId)
            .map(({ node: p }) => (
              <BlogPost
                to={
                  (location.pathname.match(/(\/(..)\/)/)
                    ? location.pathname.match(/(\/(..)\/)/)[1]
                    : "/") +
                  "blog/" +
                  p.slug
                }
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                key={p.id}
              >
                <h3 className="text-lg">{p.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {p.publishDate}
                </p>
              </BlogPost>
            ))}
        </article>
      </div>
    </section>
  )
}

export default SidePanel
