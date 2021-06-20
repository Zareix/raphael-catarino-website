import React from "react"

import CompetenceImage from "./CompetenceImage"

import ReactTooltip from "react-tooltip"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { FormattedMessage } from "react-intl"

const Section = styled.section`
  width: 60%;
  overflow: hidden;
  box-shadow: 0 16px 20px 8px rgba(0, 0, 0, 0.1);
  transition: all 1s ease-out;

  @media (max-width: 758px) {
    width: 90%;
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
        "text-2xl font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600 py-2 px-6" +
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
      imagesMobile: allFile(
        filter: { relativeDirectory: { eq: "logoComp/mobile" } }
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
    threshold: 0.3,
  })

  const [refMobile, inViewMobile] = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.3,
  })

  const [refSoft, inViewSoft] = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.3,
  })

  const [refData, inViewData] = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.3,
  })

  const catComp = [
    { name: "Web", images: data.imagesWeb.nodes },
    { name: "Mobile", images: data.imagesMobile.nodes },
    { name: "Software", images: data.imagesSoft.nodes },
    { name: "Database", images: data.imagesDb.nodes },
  ]

  return (
    <div
      id="competences"
      className="pt-8 space-y-16 overflow-hidden pb-20 mt-12"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          <FormattedMessage id="competencesSectionTitle" />
        </h2>
        <h3 className="text-lg text-gray-600 w-4/5 mx-auto">
          <FormattedMessage id="competencesSectionSubtitle" />
        </h3>
      </div>

      {/* Web */}
      <div id="comp-web" className="flex" ref={refWeb}>
        <SectionFromLeft
          className={
            inViewWeb
              ? "transform -translate-x-0 opacity-100"
              : "transform -translate-x-3/4 opacity-0"
          }
        >
          <ImagesContainer>
            {catComp[0].images.map((img, index) => (
              <CompetenceImage
                img={img}
                category={catComp[0].name}
                key={index}
              />
            ))}
          </ImagesContainer>
          <TitleCat><FormattedMessage id="compWebTitle"/></TitleCat>
        </SectionFromLeft>
      </div>

      {/* Mobile */}
      <div id="comp-mobile" ref={refMobile}>
        <SectionFromRight
          className={
            inViewMobile
              ? "transform translate-x-0 opacity-100"
              : "transform translate-x-3/4 opacity-0"
          }
        >
          <ImagesContainer>
            {catComp[1].images.map((img, index) => (
              <CompetenceImage
                img={img}
                category={catComp[0].name}
                key={index}
              />
            ))}
          </ImagesContainer>
          <TitleCat fromRight><FormattedMessage id="compMobileTitle"/></TitleCat>
        </SectionFromRight>
      </div>

      {/* Software */}
      <div id="comp-software" ref={refSoft}>
        <SectionFromLeft
          className={
            inViewSoft
              ? "transform -translate-x-0 opacity-100"
              : "transform -translate-x-3/4 opacity-0"
          }
        >
          <ImagesContainer>
            {catComp[2].images.map((img, index) => (
              <CompetenceImage
                img={img}
                category={catComp[1].name}
                key={index}
              />
            ))}
          </ImagesContainer>
          <TitleCat><FormattedMessage id="compSoftwareTitle"/></TitleCat>
        </SectionFromLeft>
      </div>

      {/* Database */}
      <div id="comp-database" ref={refData}>
        <SectionFromRight
          className={
            inViewData
              ? "transform translate-x-0 opacity-100"
              : "transform translate-x-3/4 opacity-0"
          }
        >
          <ImagesContainer>
            {catComp[3].images.map((img, index) => (
              <CompetenceImage
                img={img}
                category={catComp[2].name}
                key={index}
              />
            ))}
          </ImagesContainer>
          <TitleCat fromRight><FormattedMessage id="compDataBaseTitle"/></TitleCat>
        </SectionFromRight>
      </div>

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
