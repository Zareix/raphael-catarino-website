import React, { useEffect } from "react"

import { graphql, navigate } from "gatsby"

import Home from "../components/Home"

const IndexPage = ({ data, location }) => {
  useEffect(() => {
    let navigatorLang = navigator.language
    if (navigatorLang.startsWith("en")) navigate("en/")
  }, [])

  return <Home data={data} location={location} />
}

export default IndexPage

export const queryIndex = graphql`
  query Index($locale: String!) {
    datoCmsBiography(locale: { eq: $locale }) {
      ...Bio
    }

    allDatoCmsCompetence(
      filter: { locale: { eq: $locale } }
      sort: { fields: position }
    ) {
      edges {
        node {
          ...Comp
        }
      }
    }

    allDatoCmsTimeline(
      filter: { locale: { eq: $locale } }
      sort: { fields: position }
    ) {
      edges {
        node {
          ...Timeline
        }
      }
    }

    allDatoCmsProject(
      filter: { locale: { eq: $locale } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          ...Project
        }
      }
    }

    datoCmsNavbar(locale: { eq: $locale }) {
      ...Navbar
    }

    datoCmsContactForm(locale: { eq: $locale }) {
      ...Contact
    }

    datoCmsSiteConfig(locale: { eq: $locale }) {
      presTitle
      presSubtitle
      compTitle
      compSubtitle
      footerMessage
    }
  }
`
