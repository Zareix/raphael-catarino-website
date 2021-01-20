import React from "react"

import { useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const jumboStyles = {
  height: "90vh",
  width: "100%",
  margin: 0,
  color: "white",
}

const Presentation = () => {
  // TODO : Gatsby-background-image
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "imgPres.jpg" }) {
        id
        childImageSharp {
          fluid (maxWidth : 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="presentation"
      fluid={data.bgImage.childImageSharp.fluid}
      style={jumboStyles}
      className="container-fluid row align-items-center"
    >
      <div className="col text-center" style={{ top: -40 }}>
        <h1>Raphaël Catarino</h1>
        <h2>Etudiant en DUT Informatique</h2>
      </div>
    </BackgroundImage>
  )
}

export default Presentation
