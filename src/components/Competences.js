import React from "react"

import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const compTitle = {
  fontSize : "1.5rem"
}

const compImg = {
  height : "100%",
  width: "100%"
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
            fluid (maxWidth: 700){
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
        <div className="text-center">
          <h1 className="contTitle">Compétences</h1>
          <p className="contText text-center">
            Voici l'ensemble des langages de programmation que je maîtrise.
          </p>
          <div>
            <h3 style={compTitle}>Web</h3>
            <div className="grid grid-cols-4 auto-rows-min justify-center justify-items-center">
              {data.imagesWeb.nodes.map((img) => (
                <Img
                  key={img.id}
                  fluid={img.childImageSharp.fluid}
                  style={compImg}
                ></Img>
              ))}
            </div>
          </div>
          <div>
            <h3 style={compTitle}>Software</h3>
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
            <h3 style={compTitle}>Database</h3>
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
