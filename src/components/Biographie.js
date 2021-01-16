import React from "react";

import { Spring, config } from "react-spring/renderprops";

const bioStyles = {
  height: "1000px",
  width: "80%",
  position: "relative",
  top: -100,
  borderRadius: 10,
};

const Biographie = (props) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={config.molasses}>
      {(spring) => (
        <div style={spring} >
          <div style={bioStyles} className="container bg-white" id={props.id}>
            <div className="row p-3 justify-content-center">
              <h1 className="">Biographie</h1>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Biographie;
