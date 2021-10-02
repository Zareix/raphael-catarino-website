import React, { useEffect } from "react"

import { graphql } from "gatsby"
import ReactTooltip from "react-tooltip"

import Competence from "./Competence"

const Competences = ({ data, title, subtitle }) => {
  const categories = data.edges

  useEffect(() => {
    setTimeout(() => ReactTooltip.rebuild(), 3000)
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
      <ReactTooltip
        place="bottom"
        effect="float"
        backgroundColor="#2563EB"
        textColor="white"
        clickable
      />
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
