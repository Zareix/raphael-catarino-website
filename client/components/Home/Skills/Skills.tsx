import React from 'react';
import Image from 'next/image';

import { SectionSubtitle, SectionTitle } from '@components/ui/Home';
import { useHomeContext } from '../';

const Skills = () => {
  const {
    home: { skills },
  } = useHomeContext();

  return (
    <section className="min-h-screen w-full" id="skills">
      <SectionTitle>{skills.title}</SectionTitle>
      <SectionSubtitle>{skills.subtitle}</SectionSubtitle>
      <div className="flex gap-6 md:gap-12 justify-center items-center flex-wrap">
        {skills.skillsDomains.map((domain) => (
          <article
            key={domain.id}
            className="bg-slate-900 mx-4 min-w-[300px] text-gray-50 font-mono p-8 rounded-lg relative pt-10 shadow-md md:w-max w-full"
          >
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="bg-red-400 rounded-full w-3 h-3"></div>
              <div className="bg-yellow-400 rounded-full w-3 aspect-square"></div>
              <div className="bg-green-400 rounded-full w-3 aspect-square"></div>
            </div>
            <h2 className="absolute top-2 left-1/2 -translate-x-1/2">
              {domain.title}
            </h2>
            <div className="grid grid-cols-3 justify-center gap-x-12 gap-y-4">
              {domain.skills.map((skill) => (
                <div key={skill.id} className="text-center">
                  <div className="relative w-16 aspect-square mx-auto">
                    <Image
                      src={skill.icon.url}
                      alt=""
                      layout="fill"
                      objectFit="cover"
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
