import React, { useContext } from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import PostAuthorsList from "./PostAuthorsList"
import useWindowWidth from "../../hooks/use-window-width"
import CmsDataContext from "../../utils/context/data-context"

const PostHeader = ({ isIndex }) => {
  const { isMobile } = useWindowWidth()

  const { blogPost, settings } = useContext(CmsDataContext)

  return (
    <>
      <GatsbyImage
        image={blogPost.featuredImage.gatsbyImageData}
        alt={blogPost.featuredImage.alt}
        title={blogPost.featuredImage.title}
        className={isIndex ? "w-full h-52" : "w-full h-72 md:h-80"}
        objectFit="cover"
      />
      <div
        className={
          "mx-10 mt-6" + (isIndex ? "" : " prose md:prose-md lg:prose-lg dark:prose-invert")
        }
      >
        <h1 className={"font-bold" + (isIndex ? " text-2xl" : " !mb-0")}>{blogPost.title}</h1>
        <h2
          className={
            "my-2 font-semibold text-gray-500 dark:text-gray-300" +
            (isIndex ? " text-xl" : " !mt-2")
          }
        >
          {blogPost.subtitle}
        </h2>
        <div className="flex gap-1 md:items-center flex-wrap flex-col md:flex-row">
          <PostAuthorsList authors={blogPost.authors} /> {!isIndex && !isMobile && <b>·</b>}
          <div
            className={
              "text-sm flex gap-1 text-gray-500 dark:text-gray-400" +
              (isIndex ? " w-full" : "") +
              (isMobile && !isIndex ? " flex-col" : "")
            }
          >
            {!isIndex && settings.dateText} {blogPost.publishDate}
            {blogPost.updateDate && (
              <>
                {(!isMobile || isIndex) && <b>·</b>}
                <span>
                  {isIndex ? "MaJ : " : settings.updatedDateText} {blogPost.updateDate}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PostHeader
