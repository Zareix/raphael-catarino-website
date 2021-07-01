import React, { useEffect } from "react"

import { IntlProvider } from "react-intl"
import { navigate } from "gatsby"

import French from "../../lang/fr.json"

import Home from "../components/Home"

const IndexPage = () => {
  useEffect(() => {
    let navigatorLang = navigator.language
    if (navigatorLang.startsWith("en")) navigate("en/")
  }, [])

  return (
    <IntlProvider locale="fr" messages={French}>
      <Home />
    </IntlProvider>
  )
}

export default IndexPage
