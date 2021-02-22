import * as React from "react"

import Presentation from "../components/Presentation"
import Layout from "../components/Layout"
import Biographie from "../components/Biographie"
import Competences from "../components/Competences"
import Projets from "../components/Projets"
import SEO from "../components/Seo"
import ScrollButton from "../components/ScrollButton"

import { Spring, config } from "react-spring/renderprops"

import "../styles/index.css"
import "fontsource-open-sans"

const pageStyles = {
  fontFamily: "Open Sans",
  color: "#232129",
  backgroundColor: "#F5F5F5",
}

const contentStyles = {
  top: "-50px",
  position: "relative",
  backgroundColor: "white",
  borderRadius: "30px",
  zIndex: 1,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <SEO title="Portofolio" />
      <Layout>
        <Presentation />
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={config.molasses}
        >
          {(spring) => (
            <div style={spring}>
              <div
                style={contentStyles}
                className="mx-auto p-5 md:p-14 w-11/12 md:w-5/6 grid grid-cols-1 justify-center divide-y-4 gap-8"
              >
                <Biographie id={"bio"} />
                <Competences id={"competences"} />
                <Projets id={"projets"} />
              </div>
            </div>
          )}
        </Spring>
      </Layout>
      <ScrollButton />
    </main>
  )
}

export default IndexPage
