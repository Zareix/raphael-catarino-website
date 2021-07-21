import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { IoMdPerson } from "@react-icons/all-files/io/IoMdPerson"

const PostHeader = ({
  title,
  subtitle,
  featuredImage,
  author,
  publishDate,
  updateDate,
  smallImage,
  isIndex,
}) => {
  return (
    <>
      <GatsbyImage
        image={featuredImage.gatsbyImageData}
        alt={featuredImage.alt}
        title={featuredImage.title}
        className={smallImage ? "w-full h-52" : "w-full h-96"}
        objectFit="cover"
      />
      <div className="mx-10 mt-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="my-2 text-2xl font-semibold text-gray-600 dark:text-gray-400">
          {subtitle}
        </h2>
        <div className="flex gap-1 md:items-center flex-wrap flex-col md:flex-row">
          <div className="flex gap-2 items-center">
            <IoMdPerson size={30} className="border rounded-full p-1" />
            <i>{author}</i>
          </div>{" "}
          {!isIndex && <b className="hidden md:block">·</b>}
          <div className={"text-sm flex gap-1" + (isIndex ? " w-full" : "")}>
            {publishDate}
            {updateDate && (
              <>
                <b>·</b>
                <span>MaJ : {updateDate}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PostHeader
