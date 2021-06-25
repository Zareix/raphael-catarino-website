import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import ReactTooltip from "react-tooltip"
import { FormattedMessage } from "react-intl"

import Competence from "./Competence"

const Competences = () => {
  const query = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___index, order: ASC }
        filter: { fileAbsolutePath: { glob: "**/competences/**" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              index
              titleFr
              titleEn
              images {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }
              imagesTitles
            }
          }
        }
      }
    }
  `)

  const categories = query.allMarkdownRemark.edges

  return (
    <section
      id="competences"
      className="pt-8 space-y-16 overflow-hidden pb-20 mt-12"
    >
      <div className="text-center -mb-8">
        <h2 className="text-3xl font-bold">
          <FormattedMessage id="competencesSectionTitle" />
        </h2>
        <h3 className="text-lg text-gray-600 dark:text-gray-400 w-4/5 mx-auto">
          <FormattedMessage id="competencesSectionSubtitle" />
        </h3>
      </div>
      {categories.map(({ node: cat }) => (
        <Competence competence={cat} key={cat.id} />
      ))}
      <ReactTooltip
        place="bottom"
        effect="solid"
        offset={{ top: 75 }}
        backgroundColor="#2563EB"
        textColor="white"
        delayUpdate={0}
        clickable
      />
    </section>
  )
}

export default Competences
