import React from "react"

import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const compTitleStyles = {
  fontSize: "1.5rem",
  marginTop: "1.5rem",
  paddingTop: "0.5rem",
}

const Competences = (props) => {
  const data = useStaticQuery(graphql`
    query {
      imagesWeb: allFile(
        filter: { relativeDirectory: { eq: "logoComp/web" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
      imagesSoft: allFile(
        filter: { relativeDirectory: { eq: "logoComp/logiciels" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
      imagesDb: allFile(
        filter: { relativeDirectory: { eq: "logoComp/database" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    }
  `)

  const catComp = [
    { name: "Web", images: data.imagesWeb },
    { name: "Software", images: data.imagesSoft },
    { name: "Database", images: data.imagesDb },
  ]

  return (
    <div id={props.id} className="pt-8">
      <div className="text-center">
        <h1 className="contTitle">Compétences</h1>
        <p className="contText text-center">
          Voici l'ensemble des langages de programmation que je maîtrise.
        </p>
        {catComp.map((cat, index) => (
          <div key={index}>
            <h3 style={compTitleStyles} className="w-6/12 border-t-2 mx-auto">
              {cat.name}
            </h3>
            <div className="flex flex-wrap justify-items-center place-content-center">
              {cat.images.nodes.map((img) => (
                <Img
                  key={img.id}
                  fluid={img.childImageSharp.fluid}
                  alt={`${cat.name} ${img.childImageSharp.fluid.originalName}`}
                  className="w-2/5 md:w-1/5 ml-2 mr-2"
                ></Img>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Competences
