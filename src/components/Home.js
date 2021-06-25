import * as React from "react"
import { useState, useEffect } from "react"

import "../styles/index.css"

import styled from "styled-components"
import { CSSTransition, SwitchTransition } from "react-transition-group"

import Presentation from "./Presentation"
import Layout from "./Layout"
import Biographie from "./Biographie"
import Competences from "./competences/Competences"
import Projets from "./Projets/Projets"
import Seo from "./Seo"
import BeforeContent from "./BeforeContent"
import Timeline from "./timeline/Timeline"

const Main = styled.main`
  margin: auto;
  z-index: 1;
`

const Home = () => {
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

    if (window.pageYOffset > 150) setScrolled(true)

    return () => window.removeEventListener("scroll", checkScrollTop)
  }, [scrolled])

  return (
    <>
      <Seo />
      <Layout>
        <Main id="main">
          <Presentation />
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
                <>
                  <BeforeContent />
                  <div className="empty-content" />
                </>
              )}
            </CSSTransition>
          </SwitchTransition>
          <Timeline />
          <Competences />
          <Projets />
        </Main>
      </Layout>
    </>
  )
}

export default Home
