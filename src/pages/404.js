import React, { Fragment } from "react"

import { Link } from "gatsby"
import styled from "styled-components"

import "../styles/index.css"

import OfflineSvg from "../images/svg/offline.svg"
import Seo from "../components/Seo"

const MainStyled = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

const LinkStyled = styled(Link)`
  color: #2563eb;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #1d4db6;
  }
`

const NotFoundPage = () => {
  return (
    <Fragment>
      <Seo title="404" />
      <MainStyled id="404">
        <OfflineSvg className="h-64 md:h-96" />
        <h1 className="text-2xl">Oups ! Page introuvable. </h1>
        <button className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
          <Link to="/">Revenez à l'accueil</Link>
        </button>
      </MainStyled>
    </Fragment>
  )
}

export default NotFoundPage
