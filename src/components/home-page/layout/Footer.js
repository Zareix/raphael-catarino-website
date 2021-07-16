import React from "react"

import styled from "styled-components"

import Contact from "../contact/Contact"

const FooterStyled = styled.footer`
  background-color: #424242;
  height: 30vh;
  bottom: 30vh;
  padding-top: 2.5rem;
  padding-bottom: 0.75rem;
  display: grid;
  align-content: end;
  justify-items: center;
  gap: 0.75rem;
`

const Footer = ({ dataContact, message }) => {
  return (
    <FooterStyled className="text-gray-200 dark:text-gray-300 dark:bg-gray-700">
      <Contact data={dataContact} />
      <p>{message}</p>
    </FooterStyled>
  )
}

export default Footer
