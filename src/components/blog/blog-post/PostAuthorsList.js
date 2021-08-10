import React from "react"

import { IoMdPerson } from "@react-icons/all-files/io/IoMdPerson"
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill"
import { GatsbyImage } from "gatsby-plugin-image"

const PostAuthorsList = ({ authors }) => {
  return (
    <div className="flex items-center">
      {authors.length > 1 ? (
        <BsFillPeopleFill size={32} className="border rounded-full p-1" />
      ) : authors[0].profilPicture ? (
        <GatsbyImage
          image={authors[0].profilPicture.gatsbyImageData}
          className="w-8 h-8 overflow-hidden rounded-full"
          objectFit="cover"
          alt={authors[0].profilPicture.alt}
          title={authors[0].profilPicture.title}
        />
      ) : (
        <IoMdPerson size={32} className="border rounded-full p-1" />
      )}
      <span className="ml-1 italic">
        {authors.map((author, index) => (
          <>
            {author.name}
            {index !== authors.length - 1 && <span className="mx-1">&</span>}
          </>
        ))}
      </span>
    </div>
  )
}

export default PostAuthorsList
