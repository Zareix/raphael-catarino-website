import * as React from "react";

import Presentation from "../components/Presentation";
import Layout from "../components/Layout";
import Biographie from "../components/Biographie";
import Competences from "../components/Competences";
import Projets from "../components/Projets";
import Contact from "../components/Contact";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout>
        <Presentation />
        <Biographie />
        <Competences />
        <Projets />
        <Contact />
      </Layout>
    </main>
  );
};

export default IndexPage;
