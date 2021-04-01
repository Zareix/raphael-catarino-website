import React from "react"

import styled from "styled-components"

const FooterStyled = styled.div`
    background-color: #424242;
    color: #BDBDBD;
    height: 40vh;
    bottom: 30vh;
  `

const Footer = () => {
  return (
    <FooterStyled
      className="grid grid-cols-1 content-end justify-items-center p-10"
    >
      <a href="mailto:contact@raphael-catarino.fr" className="underline">
        Contactez moi
      </a>
      <p>Raphaël Catarino - Portofolio ©</p>
    </FooterStyled>
  )
}

export default Footer
