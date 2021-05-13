import React from "react"

import CompetenceImage from "./CompetenceImage"

import ReactTooltip from "react-tooltip"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const Section = styled.section`
  width: 80%;
  overflow: hidden;
  box-shadow: 0px 10px 16px 4px rgba(0, 0, 0, 0.25);
  transition: all 1s ease-out;

  @media (max-width: 758px) {
    width: 95%;
  }
`

const SectionFromLeft = styled(Section)`
  margin-right: auto;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
`

const SectionFromRight = styled(Section)`
  margin-left: auto;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  padding: 0 1.5rem;
`

const TitleCat = (props) => {
  const { fromRight } = props
  return (
    <h3
      className={
        "contTitle text-white bg-gradient-to-br from-blue-500 to-blue-600 py-2 px-6" +
        (fromRight ? "" : " text-right")
      }
    >
      {props.children}
    </h3>
  )
}

const Competences = (props) => {
  const data = useStaticQuery(graphql`
    {
      imagesWeb: allFile(
        filter: { relativeDirectory: { eq: "logoComp/web" } }
        sort: { fields: name }
      ) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
      imagesSoft: allFile(
        filter: { relativeDirectory: { eq: "logoComp/logiciels" } }
        sort: { fields: name }
      ) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
      imagesDb: allFile(
        filter: { relativeDirectory: { eq: "logoComp/database" } }
        sort: { fields: name }
      ) {
        nodes {
          id
          name
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  `)

  const [refWeb, inViewWeb] = useInView({
    triggerOnce: true,
    delay: 500,
  })

  const [refSoft, inViewSoft] = useInView({
    triggerOnce: true,
    delay: 500,
  })

  const [refData, inViewData] = useInView({
    triggerOnce: true,
    delay: 500,
  })

  const catComp = [
    { name: "Web", images: data.imagesWeb.nodes },
    { name: "Software", images: data.imagesSoft.nodes },
    { name: "Database", images: data.imagesDb.nodes },
  ]

  return (
    <div id="competences" className="pt-8 space-y-16 overflow-hidden pb-8">
      <div className="text-center">
        <h2 className="contTitle">Compétences</h2>
        <h3 className="contText w-4/5 mx-auto">
          Voici l'ensemble des langages de programmation et technologies que je
          maîtrise.
        </h3>
      </div>

      {/* Web */}
      <SectionFromLeft
        className={
          inViewWeb
            ? "transform -translate-x-0 opacity-100"
            : "transform -translate-x-3/4 opacity-0"
        }
        ref={refWeb}
      >
        <ImagesContainer>
          {catComp[0].images.map((img) => (
            <CompetenceImage img={img} category={catComp[0].name} />
          ))}
        </ImagesContainer>
        <TitleCat>{catComp[0].name}</TitleCat>
      </SectionFromLeft>

      {/* Software */}
      <SectionFromRight
        className={
          inViewSoft
            ? "transform translate-x-0 opacity-100"
            : "transform translate-x-3/4 opacity-0"
        }
        ref={refSoft}
      >
        <ImagesContainer>
          {catComp[1].images.map((img) => (
            <CompetenceImage img={img} category={catComp[1].name} />
          ))}
        </ImagesContainer>
        <TitleCat fromRight>{catComp[1].name}</TitleCat>
      </SectionFromRight>

      {/* Database */}
      <SectionFromLeft
        className={
          inViewData
            ? "transform -translate-x-0 opacity-100"
            : "transform -translate-x-3/4 opacity-0"
        }
        ref={refData}
      >
        <ImagesContainer>
          {catComp[2].images.map((img) => (
            <CompetenceImage img={img} category={catComp[2].name} />
          ))}
        </ImagesContainer>
        <TitleCat>{catComp[2].name}</TitleCat>
      </SectionFromLeft>

      <ReactTooltip
        place="bottom"
        effect="solid"
        offset={{ top: 90 }}
        backgroundColor="#2563EB"
        textColor="white"
        delayUpdate={0}
        clickable
      />
    </div>
  )
}

export default Competences
