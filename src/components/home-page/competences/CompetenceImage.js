import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import Tippy from "@tippyjs/react"

const Competence = (props) => {
  const { category, gatsbyImageData, imgTitle } = props

  return (
    <Tippy
      content={imgTitle}
      interactive
      arrow
      offset={[0, -10]}
      animation="shift-away"
    >
      <button className="w-1/3 md:w-1/5 cursor-default">
        <GatsbyImage
          image={gatsbyImageData}
          alt={category + " " + imgTitle}
          objectFit="contain"
          imgClassName="p-1 md:p-3"
        />
      </button>
    </Tippy>
  )
}

export default Competence
