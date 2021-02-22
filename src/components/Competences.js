import React from "react"

import Competence from "./Competence"

import ReactTooltip from 'react-tooltip';
import { useStaticQuery } from "gatsby"

const compTitleStyles = {
  fontSize: "1.5rem",
  marginTop: "1.5rem",
  paddingTop: "0.5rem",
}

const Competences = (props) => {
  const data = useStaticQuery(graphql`
    query {
      imagesWeb: allFile(
        filter: { relativeDirectory: { eq: "logoComp/web" } }, sort: {fields: name}
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
      imagesSoft: allFile(
        filter: { relativeDirectory: { eq: "logoComp/logiciels" } }, sort: {fields: name}
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
      imagesDb: allFile(
        filter: { relativeDirectory: { eq: "logoComp/database" } }, sort: {fields: name}
      ) {
        nodes {
          id
          name
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
                <div
                  className="w-2/5 md:w-1/5 ml-2 mr-2">
                  <Competence img={img} cat={cat} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ReactTooltip place="bottom" effect="solid" offset={{top : 14}} backgroundColor="#2563EB" textColor="white" delayUpdate={0} clickable/>
    </div>
  )
}

export default Competences
