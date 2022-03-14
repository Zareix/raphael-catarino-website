import React from "react";

import { motion } from "framer-motion";
import styled from "styled-components";

import CompetenceImage from "./CompetenceImage";

const CompetenceWrapper = styled.article`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const Section = styled(motion.section)`
  position: relative;
  width: clamp(600px, 50%, 950px);
  background-color: white;
  border-radius: 1rem;
  margin: auto;

  @media (max-width: 758px) {
    width: 92%;
  }

  .dark & {
    background-color: #1e293b;
  }
`;

const SectionFromLeft = styled(Section)`
  @media (max-width: 758px) {
    margin-left: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

const SectionFromRight = styled(Section)`
  @media (max-width: 758px) {
    margin-right: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  padding: 0 1.5rem;
`;

const TitleCat = ({ fromRight, children }) => {
  return (
    <h3
      className={
        "rounded-b-2xl bg-gradient-to-br from-blue-500 to-blue-600 py-2 px-6 text-2xl font-bold text-gray-100 dark:from-blue-800 dark:to-blue-900" +
        (fromRight ? "" : " text-right")
      }
    >
      {children}
    </h3>
  );
};

const variantsFromLeft = {
  notInView: {
    opacity: 0,
    x: "-50%",
  },
  inView: {
    opacity: 1,
    x: "0",
  },
};

const variantsFromRight = {
  notInView: {
    opacity: 0,
    x: "50%",
  },
  inView: {
    opacity: 1,
    x: "0",
  },
};

const transitionProperty = {
  x: {
    type: "spring",
    stiffness: 40,
    damping: 10,
  },
  opacity: {
    duration: 0.75,
  },
};

const viewportOptions = {
  once: true,
  margin: "0px 0px -200px 0px",
};

const AnimatedContainer = (props) => {
  return props.index % 2 === 0 ? (
    <SectionFromLeft
      {...props}
      initial={variantsFromLeft.notInView}
      whileInView={variantsFromLeft.inView}
      transition={transitionProperty}
      viewport={viewportOptions}
    >
      {props.children}
    </SectionFromLeft>
  ) : (
    <SectionFromRight
      {...props}
      initial={variantsFromRight.notInView}
      whileInView={variantsFromRight.inView}
      transition={transitionProperty}
      viewport={viewportOptions}
    >
      {props.children}
    </SectionFromRight>
  );
};

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
  );
};

export default Competence;
