import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import PostAuthorsList from "./PostAuthorsList"
import useWindowWidth from "../../hooks/use-window-width"

const PostHeader = ({
  title,
  subtitle,
  featuredImage,
  authors,
  publishDate,
  updateDate,
  isIndex,
  dateText,
  updatedDateText,
}) => {
  const { isMobile } = useWindowWidth()

  return (
    <>
      <GatsbyImage
        image={featuredImage.gatsbyImageData}
        alt={featuredImage.alt}
        title={featuredImage.title}
        className={isIndex ? "w-full h-52" : "w-full h-72 md:h-80"}
        objectFit="cover"
      />
      <div
        className={
          "mx-10 mt-6" + (isIndex ? "" : " prose md:prose-md lg:prose-lg dark:prose-invert")
        }
      >
        <h1 className={"font-bold" + (isIndex ? " text-2xl" : " !mb-0")}>{title}</h1>
        <h2
          className={
            "my-2 font-semibold text-gray-500 dark:text-gray-300" +
            (isIndex ? " text-xl" : " !mt-2")
          }
        >
          {subtitle}
        </h2>
        <div className="flex gap-1 md:items-center flex-wrap flex-col md:flex-row">
          <PostAuthorsList authors={authors} /> {!isIndex && !isMobile && <b>·</b>}
          <div
            className={
              "text-sm flex gap-1 text-gray-500 dark:text-gray-400" +
              (isIndex ? " w-full" : "") +
              (isMobile && !isIndex ? " flex-col" : "")
            }
          >
            {!isIndex && dateText} {publishDate}
            {updateDate && (
              <>
                {(!isMobile || isIndex) && <b>·</b>}
                <span>
                  {isIndex ? "MaJ : " : updatedDateText} {updateDate}
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
