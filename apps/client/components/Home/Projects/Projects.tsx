import React, { useState } from "react";

import Image from "next/image";

import { useHomeContext } from "..";
import { SectionSubtitle, SectionTitle } from "@components/ui/Home";
import ProjectArticle from "./ProjectArticle";

const Projects = () => {
  const {
    home: { projects },
  } = useHomeContext();
  const [active, setActive] = useState(-1);
  const [max, setMax] = useState(2);

  const selectProject = (id: number) => {
    setActive(id === active ? -1 : id);
  };

  return (
    <section
      className="min-h-screen w-full bg-white py-10 dark:bg-gray-900 dark:text-gray-50"
      id="projects"
    >
      <SectionTitle>{projects.title}</SectionTitle>
      <SectionSubtitle>{projects.subtitle}</SectionSubtitle>
      <div className="container flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {projects.projects.slice(0, max).map((p) => (
          <ProjectArticle
            key={p.id}
            project={p}
            active={p.id === active}
            setActive={selectProject}
          />
        ))}
      </div>
      {projects.projects.length > max && (
        <div className="mt-12 grid w-full place-content-center">
          <button
            className="flex w-28 items-center justify-center gap-1 rounded-lg bg-slate-900 py-2 text-gray-50 shadow transition-all duration-300 hover:scale-105 hover:shadow-md"
            onClick={() => setMax(max + 5)}
          >
            Voir plus
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
