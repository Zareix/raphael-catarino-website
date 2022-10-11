import React from "react";

import { SectionSubtitle, SectionTitle } from "@components/ui/Home";
import { useHomeContext } from "../";
import SkillDomainArticle from "./SkillDomainArticle";

const Skills = () => {
  const {
    home: { skills },
  } = useHomeContext();

  return (
    <section
      className="grid min-h-[80vh] w-full place-content-center py-10 dark:bg-gray-800 dark:text-gray-50"
      id="skills"
    >
      <SectionTitle>{skills.title}</SectionTitle>
      <SectionSubtitle>{skills.subtitle}</SectionSubtitle>
      <div className="container flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {skills.skillsDomains.map((domain) => (
          <SkillDomainArticle key={domain.id} domain={domain} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
