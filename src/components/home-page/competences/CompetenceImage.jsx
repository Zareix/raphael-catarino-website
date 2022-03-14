import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

const Competence = (props) => {
  const { category, gatsbyImageData, imgTitle } = props;

  return (
<<<<<<< HEAD
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
=======
    <Tippy content={imgTitle} interactive arrow offset={[0, -10]} animation="shift-away">
      <button className="w-24 h-24 cursor-default p-2 md:p-3">
        <GatsbyImage image={gatsbyImageData} alt={category + " " + imgTitle} objectFit="contain" />
      </button>
    </Tippy>
  )
}
>>>>>>> competences-rework

export default Competence;
