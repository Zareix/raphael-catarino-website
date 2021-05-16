import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

const Competence = (props) => {
  const { category, img } = props

  const name = img.name.substring(2).replace("_", "/")

  return (
    <div data-tip={name} className="w-1/3 md:w-1/4 p-2 md:p-5 my-auto">
      <GatsbyImage
        image={img.childImageSharp.gatsbyImageData}
        key={img.id}
        alt={category + " " + name}
      />
    </div>
  )
}

export default Competence
