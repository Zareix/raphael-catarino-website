import React, { useContext, useState } from "react";

import { graphql } from "gatsby";
import styled from "styled-components";

import CmsDataContext from "../../utils/context/data-context";
import { GatsbyImage } from "gatsby-plugin-image";
import { AnimatePresence, motion } from "framer-motion";

const CompetencesList = styled.ul`
  margin: 0 auto;
  width: clamp(10rem, 90vw, 40rem);
  display: grid;
  gap: 1rem;
`;

const Competences = () => {
  const { competences } = useContext(CmsDataContext);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const setSelectedValue = (value) => {
    if (value === selectedIndex) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(value);
    }
  };

  return (
    <section id="competences" className="mt-20 scroll-mt-20 pb-20">
      <h2 className="text-center text-3xl font-bold">{competences.title}</h2>
      <h3 className="mx-auto mb-8 w-4/5 text-center text-lg text-gray-600  dark:text-gray-400">
        {competences.subtitle}
      </h3>
      <CompetencesList>
        {competences.categories.map(({ node: cat }, index) => (
          <li key={cat.id} className="flex flex-col items-center">
            <button
              className={`relative z-10 w-[max-content] rounded-xl px-4 py-2 text-xl font-bold transition-colors duration-500 ${
                selectedIndex === index
                  ? "bg-blue-800 text-white shadow-xl dark:bg-blue-900"
                  : "text-blue-900 dark:text-blue-200"
              }`}
              onClick={() => setSelectedValue(index)}
            >
              {cat.title}
            </button>

            <AnimatePresence>
              {selectedIndex === index && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: {
                      height: "auto",
                      opacity: 1,
                    },
                    collapsed: {
                      height: 0,
                      opacity: 0,
                    },
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="min-w-[20rem] -translate-y-6 overflow-hidden rounded-lg bg-white px-8 shadow-lg dark:bg-gray-800"
                >
                  <ul className="flex flex-wrap justify-center py-6">
                    {cat.icons.map((icon, index) => (
                      <li
                        key={index}
                        className="tooltip tooltip-bottom flex h-24 w-24 p-3 md:h-28 md:w-28"
                        data-tooltip={icon.title}
                      >
                        <GatsbyImage
                          {...icon}
                          alt={cat + " " + icon.title}
                          objectFit="contain"
                        />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </CompetencesList>
    </section>
  );
};

export default Competences;

export const fragmentComp = graphql`
  fragment Comp on DatoCmsCompetence {
    id
    title
    icons {
      title
      alt
      image: gatsbyImageData(placeholder: TRACED_SVG, width: 200)
    }
  }
`;
