import React from "react"

import styled from "styled-components"

import LightDarkSwitch from "../light-dark-switch/LightDarkSwitch"
import Contact from "../contact/Contact"

const FooterStyled = styled.footer`
  height: 30vh;
  bottom: 30vh;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  display: grid;
  align-content: end;
  justify-items: center;
  gap: 0.75rem;
`

const Footer = ({ dataContact, message }) => {
  return (
    <FooterStyled className="text-gray-200 dark:text-gray-300 bg-gray-600 dark:bg-gray-800">
      <div className="flex gap-3">
        <p>Switch Theme :</p>
        <LightDarkSwitch />
      </div>
      <Contact data={dataContact} />
      <p>{message}</p>
    </FooterStyled>
  )
}

export default Footer
