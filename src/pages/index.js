import * as React from "react";

import Presentation from "../components/Presentation";
import Layout from "../components/Layout";
import Biographie from "../components/Biographie";
import Competences from "../components/Competences";
import Projets from "../components/Projets";
import Contact from "../components/Contact";
import { Spring, config } from "react-spring/renderprops";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const contentStyles = {
  height: "1000px",
  position: "relative",
  top: -100,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout>
        <Presentation />
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={config.molasses}
        >
          {(spring) => (
            <div style={spring, contentStyles} className="row justify-content-center">
              <div style={{borderRadius : "24px"}} className="col-10 p-0 bg-white shadow">
                <Biographie id={"bio"} />
                <Competences />
                <Projets />
              </div>
            </div>
          )}
        </Spring>

        <Contact />
      </Layout>
    </main>
  );
};

export default IndexPage;
