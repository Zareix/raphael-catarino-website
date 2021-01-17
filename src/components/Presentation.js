import React from "react";

import bgImage from "../images/wip.jpg"

const jumboStyles = {
  height: "90vh",
  width : "100%",
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "center",
  margin: 0,
  color: "white"
};

const Presentation = () => {
  return (
    <div style={jumboStyles} className="container-fluid row align-items-center">
      <div className="col text-center" style={{top : -40}}>
        <h1>Raphaël Catarino</h1>
        <h2>Developpeur Full Stack</h2>
      </div>
    </div>
  );
};

export default Presentation;
