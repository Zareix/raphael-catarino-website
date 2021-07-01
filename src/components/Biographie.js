import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FormattedMessage } from "react-intl"
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

const Biographie = () => {
  const { datoCmsBiography: bio } = useStaticQuery(graphql`
    query BioQuery {
      datoCmsBiography {
        title
        content
      }
    }
  `)

  return (
    <BioStyled id="bio" className="shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold">{bio.title}</h1>
      <p className="text-base text-justify mx-auto">{bio.content}</p>
    </BioStyled>
  )
}

export default Biographie
