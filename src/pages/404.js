import * as React from "react"

import "../styles/index.css"
import OfflineSvg from "../images/svg/offline.svg"

import { Link } from "gatsby"
import styled from "styled-components"

import Seo from "../components/Seo"

const MainStyled = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

const NotFoundPage = () => {
  return (
    <MainStyled id="404">
      <Seo title="404" />
      <OfflineSvg className="h-64 md:h-96" />
      <h1 className="text-2xl">Oups ! Page introuvable. </h1>
      <Link to="/">
        <button className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
          Revenez à l'accueil
        </button>
      </Link>
    </MainStyled>
  )
}

export default NotFoundPage
