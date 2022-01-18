import React, { useContext } from "react"

import { graphql } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

import { fadeInSlow } from "../../utils/framer-motion-variants"
import DataContext from "../../utils/context/data-context"

const BioStyled = styled(motion.div)`
  width: 40%;
  margin: auto;
  margin-bottom: calc(-15vh + 3rem);
  padding: 3rem;
  padding-top: 2.5rem;
  border-radius: 16px;
  transform: translateY(-15vh);

  p {
    margin-block: 0.25rem;
  }

  @media (max-width: 1280px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem 2rem;
  }
`

const Biographie = () => {
  const { biographie } = useContext(DataContext)

  return (
    <BioStyled
      variants={fadeInSlow}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="0"
      className="bg-white dark:bg-gray-800 shadow-hover rounded-3xl"
    >
      <h1 className="text-center text-2xl font-bold mb-4">{biographie.title}</h1>
      <div
        className="font-medium text-base text-justify first-letter:font-bold first-letter:text-6xl first-letter:float-left first-letter:mr-1 first-letter:font-serif"
        dangerouslySetInnerHTML={{
          __html: biographie.contentNode.childMarkdownRemark.html,
        }}
      />
    </BioStyled>
  )
}

export default Biographie

export const fragmentBio = graphql`
  fragment Bio on DatoCmsBiography {
    title
    contentNode {
      childMarkdownRemark {
        html
      }
    }
  }
`
