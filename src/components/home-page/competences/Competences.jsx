import React, { useContext } from "react";

import { graphql } from "gatsby";

import Competence from "./Competence";
import CmsDataContext from "../../utils/context/data-context";

const Competences = () => {
  const { competences } = useContext(CmsDataContext);

  return (
    <section id="competences" className=" mt-20 pb-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center">{competences.title}</h2>
      <h3 className="text-lg text-center text-gray-600 dark:text-gray-400 w-4/5 mb-8  mx-auto">
        {competences.subtitle}
      </h3>
      <div className="flex snap-x snap-mandatory w-full overflow-x-auto px-[50%] pb-6 gap-6">
        {categories.map(({ node: cat }, index) => (
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
