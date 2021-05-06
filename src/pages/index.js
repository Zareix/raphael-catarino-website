import * as React from "react"
import { useState, useEffect } from "react"

import "../styles/index.css"
import "fontsource-open-sans"

import styled from "styled-components"
import { CSSTransition, SwitchTransition } from "react-transition-group"

import Presentation from "../components/Presentation"
import Layout from "../components/Layout"
import Biographie from "../components/Biographie"
import Competences from "../components/Competences"
import Projets from "../components/Projets"
import Seo from "../components/Seo"
import ScrollButton from "../components/ScrollButton"
import BeforeContent from "../components/BeforeContent"

const Page = styled.main`
  background-color: #f5f5f5;
`

const Main = styled.div`
  margin: auto;
  background-color: white;
  z-index: 1;
`

const IndexPage = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 150) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 150) {
        setShowScroll(false)
      }
    }

    window.addEventListener("scroll", checkScrollTop)
    return () => {}
  }, [showScroll])

  return (
    <Page>
      <Seo title="Portfolio" />
      <Layout>
        <Presentation />
        <SwitchTransition>
          <CSSTransition
            key={showScroll ? "beforeContent" : "mainContent"}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            {showScroll ? (
              <div>
                <Content />
                <ScrollButton />
              </div> 
            ) : (
              <div>
                <BeforeContent />
                <div id="bioPlaceholder" className="empty-content" />
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Layout>
    </Page>
  )
}

const Content = () => {
  return (
    <Main id="main">
      <Biographie id={"bio"} />
      <Competences id={"competences"} />
      <Projets id={"projets"} />
    </Main>
  )
}

export default IndexPage
