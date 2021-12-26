import React, { useEffect, useState } from "react"

import "../styles/index.css"

import styled from "styled-components"
import { graphql, navigate } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { Helmet } from "react-helmet"
import { AnimatePresence } from "framer-motion"

import Hero from "../components/home-page/hero/Hero"
import Layout from "../components/home-page/layout/Layout"
import Biographie from "../components/home-page/biographie/Biographie"
import Competences from "../components/home-page/competences/Competences"
import Projets from "../components/home-page/projets/Projets"
import BeforeContent from "../components/home-page/BeforeContent"
import Timeline from "../components/home-page/timeline/Timeline"
import useScrolled from "../components/hooks/use-scroll"
import Loading from "../components/loading/Loading"
import { ThemeProvider } from "../components/utils/theme-context"

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  z-index: 1;
`
const IndexPage = ({ data, location }) => {
  const { scrolled } = useScrolled()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (location.pathname === "/") navigator.language.startsWith("en") && navigate("en/")

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [location])

  return (
    <ThemeProvider>
      <Helmet
        htmlAttributes={{
          lang: data.datoCmsSite.locale,
        }}
      />
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsHomePage.seoMetaTags}
      />
      <AnimatePresence initial={false}>
        {isLoading && <Loading text={data.datoCmsHomePage.loadingText} />}
      </AnimatePresence>
      <Layout data={data} location={location}>
        <Main id="main">
          <Hero data={data.datoCmsHomePage} />
          <section id="bio">
            <AnimatePresence>{!scrolled && <BeforeContent />}</AnimatePresence>
            <AnimatePresence>
              {scrolled && <Biographie data={data.datoCmsBiography} />}
            </AnimatePresence>
            {!scrolled && <div className="empty-content" />}
          </section>
          <Timeline
            data={data.allDatoCmsTimeline}
            title={data.datoCmsHomePage.timelineTitle}
            subtitle={data.datoCmsHomePage.timelineSubtitle}
          />
          <Competences
            data={data.allDatoCmsCompetence}
            title={data.datoCmsHomePage.compTitle}
            subtitle={data.datoCmsHomePage.compSubtitle}
          />
          <Projets
            data={data.allDatoCmsProject}
            title={data.datoCmsHomePage.projectsTitle}
            subtitle={data.datoCmsHomePage.projectsSubtitle}
            defaultShownItems={data.datoCmsHomePage.projectDefaultShown}
            stepShowMore={data.datoCmsHomePage.projectsShowMoreStep}
            showMoreLabel={data.datoCmsHomePage.projectsLabelShowMoreBtn}
          />
        </Main>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const queryIndex = graphql`
  query Index($locale: String!) {
    datoCmsHomePage(locale: { eq: $locale }) {
      loadingText
      presTitle
      presSubtitle
      timelineTitle
      timelineSubtitle
      compTitle
      compSubtitle
      projectsTitle
      projectsSubtitle
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      projectDefaultShown
      projectsShowMoreStep
      projectsLabelShowMoreBtn
    }

    datoCmsFooter(locale: { eq: $locale }) {
      footerMessage
    }

    datoCmsSite(locale: { eq: $locale }) {
      locale
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }

    datoCmsBiography(locale: { eq: $locale }) {
      ...Bio
    }

    allDatoCmsCompetence(filter: { locale: { eq: $locale } }, sort: { fields: position }) {
      edges {
        node {
          ...Comp
        }
      }
    }

    allDatoCmsTimeline(filter: { locale: { eq: $locale } }, sort: { fields: position }) {
      edges {
        node {
          ...Timeline
        }
      }
    }

    allDatoCmsProject(filter: { locale: { eq: $locale } }) {
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
  }
`
