import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

const Competence = (props) => {
  const { category, img, imgTitle } = props

  return (
    <GatsbyImage
      image={img.childImageSharp.gatsbyImageData}
      alt={category + " " + imgTitle}
      data-tip={imgTitle}
      className="w-1/3 md:w-1/5"
      objectFit="contain"
      imgClassName="p-1 md:p-3"
    />
  )
}

export default Competence
