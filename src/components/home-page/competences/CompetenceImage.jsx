import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

const Competence = (props) => {
  const { category, gatsbyImageData, imgTitle } = props;

  return (
    <button
      className="tooltip w-1/3 cursor-default p-3 md:w-1/5"
      data-tooltip={imgTitle}
    >
      <GatsbyImage
        image={gatsbyImageData}
        alt={category + " " + imgTitle}
        objectFit="contain"
      />
    </button>
  );
};

export default Competence;
