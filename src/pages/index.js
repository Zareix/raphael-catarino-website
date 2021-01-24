import * as React from "react"

import Presentation from "../components/Presentation"
import Layout from "../components/Layout"
import Biographie from "../components/Biographie"
import Competences from "../components/Competences"
import Projets from "../components/Projets"
import Contact from "../components/Contact"

import { Spring, config } from "react-spring/renderprops"

import "../styles/index.css"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const contentStyles = {
  height: "1000px",
  width: "80%",
  top: "-50px",
  position: "relative",
  backgroundColor: "white",
  borderRadius: "30px",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout>
        <Presentation />
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={config.molasses}
          delay={1000}
        >
          {(spring) => (
            <div style={spring}>
              <div style={contentStyles} className="mx-auto p-4 md:p-14">
                <Biographie id={"bio"} />
                <Competences id={"competences"} />
                <Projets id={"projets"} />
              </div>
            </div>
          )}
        </Spring>
        <Contact />
      </Layout>
    </main>
  )
}

export default IndexPage
