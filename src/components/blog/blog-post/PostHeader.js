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
}) => {
  return (
    <>
      <GatsbyImage
        image={featuredImage.gatsbyImageData}
        alt={featuredImage.alt}
        title={featuredImage.title}
        className="w-full h-96"
        objectFit="cover"
      />
      <div className="mx-10 mt-8">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="my-2 text-2xl font-semibold text-gray-600 dark:text-gray-400">
          {subtitle}
        </h2>
        <div className="flex flex-wrap gap-1 md:gap-3 items-center">
          <div className="flex gap-2 items-center">
            <IoMdPerson size={30} className="border rounded-full p-1" />
            <i>{author}</i>
          </div>{" "}
          <b className="hidden md:block">·</b>
          <div>Publié le : {publishDate} </div>
          {updateDate && (
            <>
              <b className="hidden md:block">·</b>
              <div>Mis à jour le : {updateDate}</div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default PostHeader
