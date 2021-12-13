import React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

import CompetenceImage from "./CompetenceImage"

const CompetenceWrapper = styled.article`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`

const Section = styled(motion.section)`
  position: relative;
  width: clamp(600px, 50%, 950px);
  overflow: hidden;
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

const variantsFromLeft = {
  notInView: {
    opacity: 0,
    x: "-50%",
  },
  inView: {
    opacity: 1,
    x: "0",
  },
}

const variantsFromRight = {
  notInView: {
    opacity: 0,
    x: "50%",
  },
  inView: {
    opacity: 1,
    x: "0",
  },
}

const transitionProperty = {
  x: {
    type: "spring",
    stiffness: 60,
    damping: 12,
  },
  opacity: {
    duration: 0.75,
  },
}

const AnimatedContainer = (props) => {
  const [sectionRef, sectionInView] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
  })

  return props.index % 2 === 0 ? (
    <SectionFromLeft
      ref={sectionRef}
      {...props}
      animate={sectionInView ? "inView" : "notInView"}
      variants={variantsFromLeft}
      transition={transitionProperty}
    >
      {props.children}
    </SectionFromLeft>
  ) : (
    <SectionFromRight
      ref={sectionRef}
      {...props}
      animate={sectionInView ? "inView" : "notInView"}
      variants={variantsFromRight}
      transition={transitionProperty}
    >
      {props.children}
    </SectionFromRight>
  )
}

const Competence = ({ competence, index }) => {
  return (
    <CompetenceWrapper id={competence.title}>
      <AnimatedContainer index={index} className="shadow-hover">
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
      </AnimatedContainer>
    </CompetenceWrapper>
  )
}

export default Competence
