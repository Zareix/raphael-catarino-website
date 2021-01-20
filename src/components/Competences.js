import React from "react"

import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const compTextStyles = {
  fontSize: "20px",
}

const Competences = () => {
  // TODO : Use gatsby-image / graphql
  const data = useStaticQuery(graphql`
    query {
      imagesWeb: allFile(
        filter: { relativeDirectory: { eq: "logoComp/web" } }
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 row justify-content-center border-top p-4">
          <h1 className="col-12 text-center">Compétences</h1>
          <span style={compTextStyles} className="col-8 mt-3 text-center">
            Voici l'ensemble des langages que je maîtrise.
          </span>
          <div className="col-12 p-4 justify-content-center text-center row">
            <h3 className="col-6 border-bottom">Web</h3>
            <div className="row col-12 justify-content-center">
              {data.imagesWeb.nodes.map((img) => (
                <Img
                  key={img.id}
                  fluid={img.childImageSharp.fluid}
                  className="col-3"
                ></Img>
              ))}
            </div>
          </div>
          <div className="col-12 p-4 justify-content-center text-center row">
            <h3 className="col-6 border-bottom">Software</h3>
            <div className="row col-12 justify-content-center">
              {data.imagesSoft.nodes.map((img) => (
                <Img
                  key={img.id}
                  fluid={img.childImageSharp.fluid}
                  className="col-3"
                ></Img>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 p-4 justify-content-center text-center row">
          <h3 className="col-6 border-bottom">Database</h3>
          <div className="row col-12 justify-content-center">
            {data.imagesDb.nodes.map((img) => (
              <Img
                key={img.id}
                fluid={img.childImageSharp.fluid}
                className="col-3"
              ></Img>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competences
