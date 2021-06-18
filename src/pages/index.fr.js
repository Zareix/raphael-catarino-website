import React from "react"

import { IntlProvider } from "react-intl"

import French from "../../lang/fr.json"

import Home from "../components/Home"

const IndexFrPage = () => {
  return (
    <IntlProvider locale="fr" messages={French}>
      <Home />
    </IntlProvider>
  )
}

export default IndexFrPage
