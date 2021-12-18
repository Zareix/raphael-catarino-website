import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import Tippy from "@tippyjs/react"

const Competence = (props) => {
  const { category, gatsbyImageData, imgTitle } = props

  return (
    <Tippy content={imgTitle} interactive arrow offset={[0, -10]} animation="shift-away">
      <button className="w-24 h-24 cursor-default p-2 md:p-3">
        <GatsbyImage image={gatsbyImageData} alt={category + " " + imgTitle} objectFit="contain" />
      </button>
    </Tippy>
  )
}

export default Competence
