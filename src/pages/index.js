import * as React from "react"
import { useState, useEffect } from "react"

import "../styles/index.css"
import "fontsource-open-sans"

import styled from "styled-components"

import Presentation from "../components/Presentation"
import Layout from "../components/Layout"
import Biographie from "../components/Biographie"
import Competences from "../components/competences/Competences"
import Projets from "../components/Projets"
import Seo from "../components/Seo"
import ScrollButton from "../components/ScrollButton"
import BeforeContent from "../components/BeforeContent"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import Timeline from "../components/timeline/Timeline"

const Page = styled.main`
  background-color: #f5f5f5;
`

const Main = styled.div`
  margin: auto;
  background-color: white;
  z-index: 1;
`

const IndexPage = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!scrolled && window.pageYOffset > 150) {
        setScrolled(true)
      } else if (scrolled && window.pageYOffset <= 150) {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", checkScrollTop)
    return () => window.removeEventListener("scroll", checkScrollTop)
  }, [scrolled])

  return (
    <Page>
      <Seo />
      <Layout>
        <Presentation />
        <Main id="main">
          <SwitchTransition>
            <CSSTransition
              key={scrolled ? "Before content" : "Biographie"}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames="fade"
            >
              {scrolled ? (
                <Biographie />
              ) : (
                <React.Fragment>
                  <BeforeContent />
                  <div className="empty-content" />
                </React.Fragment>
              )}
            </CSSTransition>
          </SwitchTransition>
          <Timeline />
          <Competences />
          <Projets />
        </Main>
        {scrolled && <ScrollButton />}
      </Layout>
    </Page>
  )
}

export default IndexPage
