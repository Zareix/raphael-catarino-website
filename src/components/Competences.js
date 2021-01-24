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
            }
          }
        }
      }
    }
  `)

  return (
    <div id={props.id} className="mt-6 pt-6 border-t-2">
      <div className="text-center">
        <h1 className="contTitle">Compétences</h1>
        <p className="contText text-center">
          Voici l'ensemble des langages de programmation que je maîtrise.
        </p>
        <div>
          <h3 style={compTitleStyles} className="w-6/12 border-t-2 mx-auto">
            Web
          </h3>
          <div className="flex flex-wrap justify-items-center place-content-center">
            {data.imagesWeb.nodes.map((img) => (
              <Img
                key={img.id}
                fluid={img.childImageSharp.fluid}
                className="w-2/5 md:w-1/4"
              ></Img>
            ))}
          </div>
        </div>
        <div>
          <h3 style={compTitleStyles} className="w-6/12 border-t-2 mx-auto">
            Software
          </h3>
          <div className="flex flex-wrap justify-items-center place-content-center">
            {data.imagesSoft.nodes.map((img) => (
              <Img
                key={img.id}
                fluid={img.childImageSharp.fluid}
                className="w-2/5 md:w-1/4"
              ></Img>
            ))}
          </div>
        </div>
        <div>
          <h3 style={compTitleStyles} className="w-6/12 border-t-2 mx-auto">
            Database
          </h3>
          <div className="flex flex-wrap justify-items-center place-content-center">
            {data.imagesDb.nodes.map((img) => (
              <Img
                key={img.id}
                fluid={img.childImageSharp.fluid}
                className="w-2/5 md:w-1/4"
              ></Img>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competences
