import React from 'react';
import Image from 'next/image';

import { SectionSubtitle, SectionTitle } from '@components/ui/Home';
import { useHomeContext } from '../';

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
      <div className="flex gap-6 md:gap-12 justify-center items-center flex-wrap ">
        {skills.skillsDomains.map((domain) => (
          <article
            key={domain.id}
            className="bg-slate-900 mx-4 md:min-w-[400px] text-gray-50 font-mono p-8 pt-12 pb-6 rounded-lg relative shadow-md md:w-max w-full"
          >
            <div className="absolute top-2 left-2 md:top-4 md:left-4 flex gap-1">
              <div className="bg-red-400 rounded-full w-2 h-2 md:w-3 md:h-3"></div>
              <div className="bg-yellow-400 rounded-full w-2 h-2 md:w-3 md:h-3 aspect-square"></div>
              <div className="bg-green-400 rounded-full w-2 h-2 md:w-3 md:h-3 aspect-square"></div>
            </div>
            <h2 className="absolute top-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
              {domain.title}
            </h2>
            <div className="grid grid-cols-3 justify-center gap-x-12 gap-y-4 ">
              {domain.skills.map((skill) => (
                <div key={skill.id} className="text-center">
                  <div className="relative max-w-[4.5rem] w-full aspect-square mx-auto">
                    <Image
                      src={skill.icon.url}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  {skill.name}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
