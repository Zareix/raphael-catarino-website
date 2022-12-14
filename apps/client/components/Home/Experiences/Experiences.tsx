import React from "react";

import Image from "next/legacy/image";
import styled from "styled-components";

import { useHomeContext } from "..";
import { SectionSubtitle, SectionTitle } from "@components/ui/Home";

const Article = styled.article`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    top: auto;
    bottom: 2rem;
    width: 100%;
    height: 2px;
    background-color: #3f3f46;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(2rem - 8px);
    width: 20px;
    height: 20px;
    border-radius: 999vw;
    background-color: #fff;
    border: 2px solid #3f3f46;
  }

  .dark &::before {
    background-color: rgb(209 213 219);
  }

  .dark &::after {
    background-color: rgb(17 24 39);
    border: 2px solid rgb(209 213 219);
  }
`;

const Experiences = () => {
  const {
    home: { experiences },
  } = useHomeContext();

  return (
    <section className="w-full bg-white pt-28 pb-32" id="experiences">
      <SectionTitle>{experiences.title}</SectionTitle>
      <SectionSubtitle>{experiences.subtitle}</SectionSubtitle>
      <div className="container flex snap-x items-end overflow-x-scroll py-4 px-2 md:snap-none">
        {experiences.experiences.map((exp) => (
          <Article key={exp.id}>
            <div className="mx-4 flex snap-center items-center gap-3 rounded-md bg-stone-100 px-6 py-4 shadow transition-all hover:scale-105 hover:shadow-md dark:bg-gray-800 dark:text-gray-50 ">
              <div className="relative h-full w-full overflow-hidden rounded-md">
                <Image
                  src={exp.icon.url}
                  alt={exp.icon.alternativeText}
                  layout="fixed"
                  width={48}
                  height={48}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={exp.icon.placeHolder}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{exp.title}</h3>
                <a href={exp.url} className="hover:underline">
                  <h4 className="text-zinc-600 dark:text-zinc-400">
                    {exp.entreprise}
                  </h4>
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-zinc-600 dark:text-zinc-300">
              {exp.date}
            </div>
          </Article>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
