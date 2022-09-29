import React from 'react';

import { SectionSubtitle, SectionTitle } from '@components/ui/Home';
import { useHomeContext } from '../';
import SkillDomainArticle from './SkillDomainArticle';

const Skills = () => {
  const {
    home: { skills },
  } = useHomeContext();

  return (
    <section
      className="w-full dark:bg-gray-800 dark:text-gray-50 pb-24 pt-20"
      id="skills"
    >
      <SectionTitle>{skills.title}</SectionTitle>
      <SectionSubtitle>{skills.subtitle}</SectionSubtitle>
      <div className="flex gap-6 md:gap-12 justify-center items-center flex-wrap container">
        {skills.skillsDomains.map((domain) => (
          <SkillDomainArticle key={domain.id} domain={domain} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
