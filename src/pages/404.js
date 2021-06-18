import React, { useEffect, useState } from "react"

import "../styles/index.css"
import Page404 from "../images/svg/page404.svg"

import French from "../../lang/fr.json"
import English from "../../lang/en-US.json"

import { Link } from "gatsby"
import styled from "styled-components"
import { FormattedMessage, IntlProvider } from "react-intl"

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
  const [locale, setLocale] = useState("fr")
  const [messages, setMessages] = useState(French)

  useEffect(() => {
    if (navigator.language.startsWith("en")) {
      setLocale("en")
      setMessages(English)
    }
  }, [])

  return (
    <IntlProvider locale={locale} messages={messages}>
      <MainStyled id="404">
        <Seo title="404" />
        <Page404 className="h-64 md:h-96" />
        <h1 className="text-2xl">
          <FormattedMessage id="page404Title" />
        </h1>
        <Link to="/">
          <button className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
            <FormattedMessage id="page404BtnText" />
          </button>
        </Link>
      </MainStyled>
    </IntlProvider>
  )
}

export default NotFoundPage
