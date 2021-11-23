import React from "react"

import { graphql } from "gatsby"
import styled from "styled-components"

const BioStyled = styled.section`
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

const Biographie = ({ data }) => {
  return (
    <BioStyled
      id="bio"
      className="bg-white dark:bg-gray-800 shadow-hover rounded-3xl"
    >
      <h1 className="text-center text-2xl font-bold mb-4">{data.title}</h1>
      <div
        className="font-medium text-base text-justify"
        dangerouslySetInnerHTML={{
          __html: data.contentNode.childMarkdownRemark.html,
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
