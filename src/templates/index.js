import * as React from "react"
import { useEffect, useState } from "react"

import "../styles/index.css"

import styled from "styled-components"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { graphql, navigate } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { Helmet } from "react-helmet"
import AOS from "aos"
import { AnimatePresence } from "framer-motion"

import "aos/dist/aos.css"

import Presentation from "../components/home-page/landing-section/Presentation"
import Layout from "../components/home-page/layout/Layout"
import Biographie from "../components/home-page/biographie/Biographie"
import Competences from "../components/home-page/competences/Competences"
import Projets from "../components/home-page/projets/Projets"
import BeforeContent from "../components/home-page/BeforeContent"
import Timeline from "../components/home-page/timeline/Timeline"
import useScrolled from "../components/hooks/use-scroll"
import Loading from "../components/loading/Loading"

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
`
const IndexPage = ({ data, location }) => {
  const { scrolled } = useScrolled()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (location.pathname === "/")
      navigator.language.startsWith("en") && navigate("en/")

    setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    AOS.init({
      duration: 750,
      delay: 100,
      anchorPlacement: "bottom-top",
    })
  }, [location])

  return (
    <>
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
          <Presentation data={data.datoCmsHomePage} />
          <SwitchTransition>
            <CSSTransition
              key={scrolled ? "Before content" : "Biographie"}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames="fade"
            >
              {scrolled ? (
                <Biographie data={data.datoCmsBiography} />
              ) : (
                <>
                  <BeforeContent />
                  <div className="empty-content" />
                </>
              )}
            </CSSTransition>
          </SwitchTransition>
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
    </>
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
  }
`
