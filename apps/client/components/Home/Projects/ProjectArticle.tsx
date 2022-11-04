import React from "react";
import Image from "next/image";
import { TbClick } from "react-icons/tb";
import ReactMarkdown from "react-markdown";

import { Project } from "@models/Projects";

type Props = {
  active: boolean;
  project: Project;
  setActive: Function;
};

const ProjectArticle = ({ active, project, setActive }: Props) => {
  return (
    <article
      className={`relative isolate mx-4 min-h-[200px] w-full cursor-pointer md:w-max md:min-w-[350px] md:max-w-[28%] `}
      onClick={() => setActive(project.id)}
    >
      <div
        className={`group absolute inset-0 z-0 overflow-hidden rounded-lg bg-slate-100 transition-all duration-700 hover:scale-105 md:duration-300 ${
          active
            ? "h-full w-full -translate-x-[120%] shadow-xl md:w-20 md:-translate-x-8"
            : "h-full w-full translate-x-0 shadow"
        }`}
      >
        <Image
          src={project.featuredImage.url}
          alt={project.featuredImage.alternativeText}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={project.featuredImage.placeHolder}
          className={`transition-all duration-200  ${
            active
              ? "blur-[2px]"
              : "blur-[2px] md:blur-0 md:group-hover:blur-[2px]"
          }`}
        />
        <h3
          className={`absolute left-0 top-1/2 w-full -translate-y-1/2 text-center text-2xl text-gray-50 transition-opacity duration-200  md:opacity-0 ${
            active ? "" : "group-hover:opacity-100"
          }`}
        >
          {project.title}
        </h3>
        <TbClick
          className={`absolute right-2 bottom-2 text-gray-50 opacity-0 transition-opacity duration-700 ${
            active ? "" : "md:group-hover:opacity-80"
          }`}
          size={24}
        />
      </div>
      <div className="relative -z-10 h-full py-4">
        <div
          className={`relative w-full rounded-lg bg-slate-900 px-4 py-6 text-gray-50 transition-all duration-700 md:duration-300 ${
            active
              ? "scale-100 shadow-xl md:translate-x-14"
              : "translate-x-0 scale-90 md:scale-100"
          }`}
        >
          <ReactMarkdown className="overflow-y-auto text-justify text-sm md:max-h-40">
            {project.description}
          </ReactMarkdown>
          <p className="mt-2 text-right text-sm italic">
            {project.technologies.map((t) => t.name).join(", ")}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProjectArticle;
