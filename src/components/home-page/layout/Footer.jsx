import React, { useContext } from "react"

import styled from "styled-components"

import LightDarkSwitch from "../light-dark-switch/LightDarkSwitch"
import Contact from "../contact/Contact"
import CmsDataContext from "../../utils/context/data-context"

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

const Footer = () => {
  const {
    layout: { footer },
  } = useContext(CmsDataContext)

  return (
    <FooterStyled className="text-gray-200 dark:text-gray-300 bg-gray-600 dark:bg-gray-800">
      <div className="flex">
        <p>Switch Theme :</p>
        <LightDarkSwitch className="ml-1" />
      </div>
      <Contact />
      <p>{footer.message}</p>
    </FooterStyled>
  )
}

export default Footer
