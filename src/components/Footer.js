import React from "react"
import { FormattedMessage } from "react-intl"

import styled from "styled-components"

import Contact from "./contact/Contact"

const FooterStyled = styled.footer`
  background-color: #424242;
  height: 30vh;
  bottom: 30vh;
  padding-top: 2.5rem;
  padding-bottom: 0.75rem;
  margin-top: 5rem;
  display: grid;
  align-content: end;
  justify-items: center;
  gap: 0.75rem;
`

const Footer = () => {
  return (
    <FooterStyled className="text-gray-200 dark:text-gray-300 dark:bg-gray-700">
      <Contact />
      <p>
        Raphaël Catarino - <FormattedMessage id="footerPageTitle" /> ©
      </p>
    </FooterStyled>
  )
}

export default Footer
