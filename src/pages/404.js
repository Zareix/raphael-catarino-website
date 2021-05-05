import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"

import "../styles/index.css"

import OfflineSvg from "../images/svg/offline.svg"

const MainStyled = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LinkStyled = styled(Link)`
  color: #2563eb;
  cursor: pointer;
  text-decoration: underline;
`

const IndexPage = () => {
  return (
    <MainStyled>
      <div className="text-center">
        <OfflineSvg className="h-80 md:h-96" />
        <p>Oups ! Page introuvable. </p>
        <LinkStyled to="/">Revenez à mon site</LinkStyled>
      </div>
    </MainStyled>
  )
}

export default IndexPage
