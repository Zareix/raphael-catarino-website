import React from "react"

import { IntlProvider } from "react-intl"

import English from "../../lang/en-US.json"

import Home from "../components/Home"

const IndexEnPage = () => {
  return (
    <IntlProvider locale="en" messages={English}>
      <Home />
    </IntlProvider>
  )
}

export default IndexEnPage
