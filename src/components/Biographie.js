import React from "react"

import { graphql } from "gatsby"
import styled from "styled-components"

const BioStyled = styled.section`
  text-align: center;
  width: 35%;
  margin: auto;
  padding: 2rem 4rem;
  padding-top: 1.5rem;
  border-radius: 16px;
  transform: translateY(-15vh);

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem 2rem;
    padding-bottom: 2rem;
  }
`

const Biographie = ({ data }) => {
  return (
    <BioStyled id="bio" className="shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold">{data.title}</h1>
      <p className="text-base text-justify mx-auto">{data.content}</p>
    </BioStyled>
  )
}

export default Biographie

export const fragmentBio = graphql`
  fragment Bio on DatoCmsBiography {
    title
    content
  }
`
