import * as React from "react"
import { useState, useEffect } from 'react'

import styled, { keyframes } from "styled-components"
import { useTransition, animated } from 'react-spring'

import Presentation from "../components/Presentation"
import Layout from "../components/Layout"
import Biographie from "../components/Biographie"
import Competences from "../components/Competences"
import Projets from "../components/Projets"
import SEO from "../components/Seo"
import ScrollButton from "../components/ScrollButton"


import "../styles/index.css"
import "fontsource-open-sans"

const pageStyles = {
  fontFamily: "Open Sans",
  color: "#232129",
  backgroundColor: "#F5F5F5",
}


const fadeIn = keyframes`
    from {
      opacity : 0;
    }

    to {
      opacity : 1;
    }
  `

const Main = styled.div`
    top: -70px;
    margin: auto;
    position: relative;
    background-color: white;
    border-radius: 30px;
    z-index: 1;
    animation: 1s ease-in ${fadeIn};
  `


const IndexPage = () => {
  const [showScroll, setShowScroll] = useState(false);

  const transitions = useTransition(showScroll, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 200) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 200) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop); // Lance checkScrollTop quand le scroll change
    return () => { }
  }, [showScroll])

  return (
    <main style={pageStyles}>
      <SEO title="Portofolio" />
      <Layout>
        <Presentation />
        {transitions.map(({ item, key, props }) =>
          item
            ? <animated.div style={props}><Content />
              <ScrollButton /></animated.div>
            : <animated.div style={props}><div style={{ height: "2000px" }}></div></animated.div>
        )}
      </Layout>
    </main>
  )
}

const Content = () => {
  return (
    <Main
      className="p-5 md:p-14 w-11/12 md:w-5/6 grid grid-cols-1 justify-center divide-y-4 gap-8"
    >
      <Biographie id={"bio"} />
      <Competences id={"competences"} />
      <Projets id={"projets"} />
    </Main>
  )
}

export default IndexPage
