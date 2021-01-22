import * as React from "react"

import Presentation from "../components/Presentation"
import Layout from "../components/Layout"
import Biographie from "../components/Biographie"
import Competences from "../components/Competences"
import Projets from "../components/Projets"
import Contact from "../components/Contact"
import { Spring, config } from "react-spring/renderprops"


const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const contentStyles = {
  height: "1000px",
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
          delay={2000}
        >
          {(spring) => (
            <div style={spring}>
              <div style={contentStyles}>
                <div
                  style={{ borderRadius: "24px" }}
                >
                  <Biographie id={"bio"} />
                  <Competences id={"competences"}/>
                  <Projets id={"projets"}/>
                </div>
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
