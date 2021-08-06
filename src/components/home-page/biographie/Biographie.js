import React from "react"

import { graphql } from "gatsby"
import styled from "styled-components"

const BioStyled = styled.section`
  text-align: center;
  width: 35%;
  margin: auto;
  margin-bottom: calc(-15vh + 3rem);
  padding: 3rem;
  padding-top: 2.5rem;
  border-radius: 16px;
  transform: translateY(-15vh);

  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem 2rem;
  }
`

const Biographie = ({ data }) => {
  return (
    <BioStyled id="bio" className="shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <div
        className="text-base text-justify"
        dangerouslySetInnerHTML={{
          __html: data.contentNode.childMarkdownRemark.html.replaceAll(
            "\n",
            "<br/>"
          ),
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
