import React from "react"

import styled from "styled-components"

import CompetenceImage from "./CompetenceImage"

const Section = styled.section`
  width: 50%;
  overflow: hidden;
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

const TitleCat = ({ fromRight, children }) => {
  return (
    <h3
      className={
        "text-gray-100 text-2xl font-bold py-2 px-6 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-800 dark:to-blue-900" +
        (fromRight ? "" : " text-right")
      }
    >
      {children}
    </h3>
  )
}

const Container = (props) =>
  props.index % 2 === 0 ? (
    <SectionFromLeft data-aos="fade-right" {...props}>
      {props.children}
    </SectionFromLeft>
  ) : (
    <SectionFromRight data-aos="fade-left" {...props}>
      {props.children}
    </SectionFromRight>
  )

const Competence = ({ competence, index }) => {
  return (
    <article className="flex" id={competence.title}>
      <Container index={index}>
        <ImagesContainer>
          {competence.icons.map((img, index) => (
            <CompetenceImage
              key={index}
              gatsbyImageData={img.gatsbyImageData}
              imgTitle={img.title}
              category={competence.title}
            />
          ))}
        </ImagesContainer>
        <TitleCat fromRight={!(index % 2 === 0)}>{competence.title}</TitleCat>
      </Container>
    </article>
  )
}

export default Competence
