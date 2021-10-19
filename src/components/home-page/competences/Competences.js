import React, { useEffect } from "react"

import { graphql } from "gatsby"
import tippy, { followCursor } from "tippy.js"

import Competence from "./Competence"

const Competences = ({ data, title, subtitle }) => {
  const categories = data.edges

  useEffect(() => {
    tippy("[data-tip-content]", {
      arrow: true,
      interactive: true,
      followCursor: "horizontal",
      plugins: [followCursor],
    })
  }, [])

  return (
    <section id="competences" className="overflow-hidden mt-20 pb-20">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <h3 className="text-lg text-center text-gray-600 dark:text-gray-400 w-4/5 mb-8  mx-auto">
        {subtitle}
      </h3>
      {categories.map(({ node: cat }, index) => (
        <Competence competence={cat} key={cat.id} index={index} />
      ))}
    </section>
  )
}

export default Competences

export const fragmentComp = graphql`
  fragment Comp on DatoCmsCompetence {
    id
    title
    icons {
      title
      gatsbyImageData(placeholder: TRACED_SVG)
    }
  }
`
