import React from "react"

import { useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const presStyles = {
  height: "90vh",
  width: "100%",
  margin: 0,
  color: "white",
}

const Presentation = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "imgPres.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={data.bgImage.childImageSharp.fluid}
      style={presStyles}
    >
      <div style={{height : "90vh"}} className="flex justify-center items-center text-3xl">
        <div className="text-center">
          <h1 className="font-bold text-4xl">Raphaël Catarino</h1>
          <h2>Etudiant en DUT Informatique</h2>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Presentation
