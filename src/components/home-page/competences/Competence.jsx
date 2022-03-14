import React from "react";

import { motion } from "framer-motion";
import styled from "styled-components";

import CompetenceImage from "./CompetenceImage";

const Article = styled(motion.article)`
  position: relative;
  width: clamp(100px, 80vw, 600px);
  height: 100%;
  overflow: hidden;
  background-color: white;
  border-radius: 1rem;
  margin: auto;
  flex-shrink: 0;
  .dark & {
    background-color: #1e293b;
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> competences-rework

const ImagesContainer = styled.div`
  display: grid;
  min-height: 125px;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

const TitleCat = ({ fromRight, children }) => {
  return (
    <h3
      className={
        "rounded-b-2xl bg-gradient-to-br from-blue-500 to-blue-600 py-2 px-6 text-2xl font-bold text-gray-100 dark:from-blue-800 dark:to-blue-900" +
        (fromRight ? "" : " text-right")
      }
    >
      {children}
    </h3>
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> competences-rework

const Competence = ({ competence, index }) => {
  return (
    <Article index={index} className="shadow-hover snap-center">
      <ImagesContainer>
        {competence.icons.map((img, index) => (
          <CompetenceImage
            key={index}
            gatsbyImageData={img.gatsbyImageData}
            imgTitle={img.title}
            category={competence.title}
          />
        ))}
      </ImagesContainer>
      <TitleCat fromRight={!(index % 2 === 0)}>{competence.title}</TitleCat>
    </Article>
  )
}

export default Competence;
