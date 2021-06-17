import React from "react"

import styled from "styled-components"

import Contact from "./contact/Contact"

const FooterStyled = styled.div`
  background-color: #424242;
  color: #bdbdbd;
  height: 40vh;
  bottom: 30vh;
`

const Footer = () => {
  return (
    <FooterStyled className="grid content-end justify-items-center p-10 gap-3">
      <Contact />
      <p>Raphaël Catarino - Portofolio ©</p>
    </FooterStyled>
  )
}

export default Footer
