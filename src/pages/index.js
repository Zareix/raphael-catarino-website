import * as React from "react"
import { useState, useEffect } from 'react'

import "../styles/index.css"
import "fontsource-open-sans"

import styled from "styled-components"
import { Transition } from 'react-transition-group';

import Presentation from "../components/Presentation"
import Layout from "../components/Layout"
import Biographie from "../components/Biographie"
import Competences from "../components/Competences"
import Projets from "../components/Projets"
import SEO from "../components/Seo"
import ScrollButton from "../components/ScrollButton"
import BeforeContent from "../components/BeforeContent";


const pageStyles = {
  fontFamily: "Open Sans",
  color: "#232129",
  backgroundColor: "#F5F5F5",
}

const Main = styled.div`
    top: -30vh;
    margin: auto;
    position: relative;
    background-color: white;
    border-radius: 30px;
    z-index: 1;
    display: grid;
    padding: 1.5rem;
  `

const defaultStyle = {
  transition: `opacity 500ms ease-in`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const IndexPage = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 200) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 200) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => { }
  }, [showScroll])

  return (
    <main style={pageStyles}>
      <SEO title="Portofolio" />
      <Layout>
        <Presentation />
        <BeforeContent />
        <Transition in={showScroll} timeout={500}>
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <Content />
              <ScrollButton />
            </div>
          )}
        </Transition>
      </Layout >
    </main >
  )
}

const Content = () => {
  return (
    <Main
      className="md:p-14 w-11/12 md:w-5/6 divide-y-4 gap-8"
    >
      <Biographie id={"bio"} />
      <Competences id={"competences"} />
      <Projets id={"projets"} />
    </Main>
  )
}

export default IndexPage
