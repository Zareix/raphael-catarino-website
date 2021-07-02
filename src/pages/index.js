import React, { useEffect } from "react"

import { IntlProvider } from "react-intl"
import { graphql, navigate } from "gatsby"

import French from "../../lang/fr.json"

import Home from "../components/Home"

const IndexPage = ({ data }) => {
  useEffect(() => {
    let navigatorLang = navigator.language
    if (navigatorLang.startsWith("en")) navigate("en/")
  }, [])

  return (
    <IntlProvider locale="fr" messages={French}>
      <Home data={data} />
    </IntlProvider>
  )
}

export default IndexPage

export const queryIndex = graphql`
  query Index {
    datoCmsBiography {
      ...Bio
    }

    allDatoCmsCompetence(sort: { fields: position }) {
      edges {
        node {
          ...Comp
        }
      }
    }

    allDatoCmsTimeline(sort: { fields: position }) {
      edges {
        node {
          ...Timeline
        }
      }
    }

    allDatoCmsProject(sort: { fields: date, order: DESC }) {
      edges {
        node {
          ...Project
        }
      }
    }
  }
`
