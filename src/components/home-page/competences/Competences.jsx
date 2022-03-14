import React, { useContext } from "react";

import { graphql } from "gatsby";

import Competence from "./Competence";
import CmsDataContext from "../../utils/context/data-context";

const Competences = () => {
  const { competences } = useContext(CmsDataContext);

  return (
    <section id="competences" className=" mt-20 scroll-mt-20 pb-20">
      <h2 className="text-center text-3xl font-bold">{competences.title}</h2>
      <h3 className="mx-auto mb-8 w-4/5 text-center text-lg text-gray-600  dark:text-gray-400">
        {competences.subtitle}
      </h3>
      <div>
        {competences.categories.map(({ node: cat }, index) => (
          <Competence competence={cat} key={cat.id} index={index} />
        ))}
      </div>
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
      gatsbyImageData(placeholder: TRACED_SVG, width: 200)
    }
  }
`;
