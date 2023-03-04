"use client";
import { useState } from "react";

import { motion } from "framer-motion";

import { SectionSubtitle, SectionTitle } from "@components/ui/Home";
import ProjectArticle from "./ProjectArticle";
import type { Projects as ProjectsModel } from "@models/Projects";
import { useTranslations } from "next-intl";

type Props = {
  projects: ProjectsModel;
};

const Projects = ({ projects }: Props) => {
  const t = useTranslations();
  const [active, setActive] = useState(-1);
  const [max, setMax] = useState(4);

  const selectProject = (id: number) => {
    setActive(id === active ? -1 : id);
  };

  return (
    <section className="min-h-screen w-full py-16" id="projects">
      <SectionTitle>{projects.title}</SectionTitle>
      <SectionSubtitle>{projects.subtitle}</SectionSubtitle>
      <div className="container flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {projects.projects.map((p, i) => (
          <ProjectArticle
            key={p.id}
            project={p}
            active={p.id === active}
            setActive={selectProject}
            visible={i < max}
          />
        ))}
      </div>
      {projects.projects.length > max && (
        <div className="mt-12 grid w-full place-content-center">
          <motion.button
            className="flex w-28 items-center justify-center gap-1 rounded-lg bg-slate-900 py-2 text-gray-50 shadow transition-shadow duration-300 hover:shadow-md dark:bg-slate-800"
            onClick={() => setMax(max + 5)}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            {t("projects.loadMore")}
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Projects;
