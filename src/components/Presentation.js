import React from "react";

import bgImage from "../images/wip.jpg"

const jumboStyles = {
  height: "90vh",
  width : "100%",
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "center",
  color: "white"
};

const Presentation = () => {
  return (
    <div style={jumboStyles} className="row m-0 align-items-center">
      <div className="col text-center">
        <h1 className="">Raphaël Catarino</h1>
        <h2>Developpeur Full Stack</h2>
      </div>
    </div>
  );
};

export default Presentation;
