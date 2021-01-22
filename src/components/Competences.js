import React from "react"

import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const compTextStyles = {
  fontSize: "20px",
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
    <div id={props.id}>
        <div>
          <h1>Compétences</h1>
          <span style={compTextStyles}>
            Voici l'ensemble des langages que je maîtrise.
          </span>
          <div>
            <h3>Web</h3>
            <div>
              {data.imagesWeb.nodes.map((img) => (
                <Img
                  key={img.id}
                  fluid={img.childImageSharp.fluid}
                ></Img>
              ))}
            </div>
          </div>
          <div>
            <h3>Software</h3>
            <div>
              {data.imagesSoft.nodes.map((img) => (
                <Img
                  key={img.id}
                  fluid={img.childImageSharp.fluid}
                  className="col-3"
                ></Img>
              ))}
            </div>
          </div>
          <div>
            <h3>Database</h3>
            <div>
              {data.imagesDb.nodes.map((img) => (
                <Img
                  key={img.id}
                  fluid={img.childImageSharp.fluid}
                ></Img>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Competences
