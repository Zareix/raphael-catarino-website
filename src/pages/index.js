import * as React from "react";

import Jumbo from "../components/Jumbo";
import Layout from "../components/Layout";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout>
        <Jumbo/>
        
      </Layout>
    </main>
  );
};

export default IndexPage;
