import React from "react"

import styled from "styled-components"
import { useInView } from "react-intersection-observer"

import CompetenceImage from "./CompetenceImage"
import { useIntl } from "react-intl"

const Section = styled.section`
  width: 50%;
  overflow: hidden;
  transition: all 1s ease-out;
  box-shadow: 0 16px 20px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 16px;
  margin: auto;

  @media (max-width: 758px) {
    width: 92%;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1e293b;
  }
`

const SectionFromLeft = styled(Section)`
  @media (max-width: 758px) {
    margin-left: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`

const SectionFromRight = styled(Section)`
  @media (max-width: 758px) {
    margin-right: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
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
        "text-gray-100 text-2xl font-bold py-2 px-6 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-800 dark:to-blue-900" +
        (fromRight ? "" : " text-right")
      }
    >
      {props.children}
    </h3>
  )
}

const Container = (props) =>
  props.index % 2 === 0 ? (
    <SectionFromLeft
      className={
        props.inView
          ? "transform -translate-x-0 opacity-100"
          : "transform -translate-x-3/4 md:-translate-x-1/2 opacity-0"
      }
      {...props}
    >
      {props.children}
    </SectionFromLeft>
  ) : (
    <SectionFromRight
      className={
        props.inView
          ? "transform translate-x-0 opacity-100"
          : "transform translate-x-3/4 md:translate-x-1/2 opacity-0"
      }
      {...props}
    >
      {props.children}
    </SectionFromRight>
  )

const Competence = (props) => {
  const { competence } = props
  const intl = useIntl()

  const [ref, inView] = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.3,
  })

  const getTitle = (c) => {
    let locale = intl.locale.substring(0, 2)
    switch (locale) {
      case "fr":
        return c.frontmatter.titleFr
      case "en":
        return c.frontmatter.titleEn
      default:
        return c.frontmatter.titleFr
    }
  }

  return (
    <article
      className="flex"
      key={competence.id}
      id={competence.fields.slug.replace("/competences/", "").replace("/", "")}
      ref={ref}
    >
      <Container index={competence.frontmatter.index} inView={inView}>
        <ImagesContainer>
          {competence.frontmatter.images.map((img, index) => (
            <CompetenceImage
              img={img}
              imgTitle={competence.frontmatter.imagesTitles[index]}
              category={getTitle(competence)}
              key={index}
            />
          ))}
        </ImagesContainer>
        <TitleCat fromRight={!(competence.frontmatter.index % 2 === 0)}>
          {getTitle(competence)}
        </TitleCat>
      </Container>
    </article>
  )
}

export default Competence
