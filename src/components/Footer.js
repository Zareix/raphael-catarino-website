import React from "react"

import styled from "styled-components"

import Contact from "./contact/Contact"

const FooterStyled = styled.div`
  background-color: #424242;
  color: #bdbdbd;
  height: 100vh;
  bottom: 30vh;
`

const Footer = () => {
  return (
    <FooterStyled className="grid grid-cols-1 content-end justify-items-center p-10 gap-3">
      <div>
        <Contact />
      </div>
      <p>Raphaël Catarino - Portofolio ©</p>
    </FooterStyled>
  )
}

export default Footer
