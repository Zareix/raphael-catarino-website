import React from "react";
import Image from "next/image";
import { TbClick } from "react-icons/tb";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";

import { Project } from "@models/Projects";
import useWindowWidth from "@helpers/useWindowWidth";

type Props = {
  active: boolean;
  project: Project;
  setActive: Function;
  visible: boolean;
};

const ProjectArticle = ({ active, project, setActive, visible }: Props) => {
  const { isMobile } = useWindowWidth();

  return !visible ? (
    <></>
  ) : (
    <AnimatePresence>
      <article
        className={`relative isolate mx-4 min-h-[200px] w-full cursor-pointer md:w-max md:min-w-[350px] md:max-w-[28%] `}
        onClick={() => setActive(project.id)}
      >
        <motion.div
          className={`group absolute inset-0 z-0 overflow-hidden rounded-lg bg-slate-100 transition-shadow ${
            active ? "shadow-xl" : "shadow"
          }`}
          animate={{
            translateX: active ? (isMobile ? "-120%" : "-2rem") : 0,
            width: active ? "5rem" : "100%",
            scale: 1,
          }}
          transition={{
            type: "spring",
            duration: 0.7,
            bounce: 0.15,
          }}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          initial={{ scale: 0.75 }}
          exit={{ scale: 0.75 }}
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
        </motion.div>
        <div className="relative -z-10 h-full py-4">
          <motion.div
            className={`relative w-full rounded-lg bg-slate-900 px-4 py-6 text-gray-50 transition-shadow ${
              active ? "shadow-xl" : ""
            }`}
            animate={{
              scale: active ? 1 : 0.9,
              translateX: active ? (isMobile ? 0 : "3.5rem") : 0,
            }}
            transition={{
              type: "spring",
              duration: 0.7,
              bounce: isMobile ? 0.1 : 0.2,
            }}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            initial={{ scale: 0.75 }}
            exit={{ scale: 0.75 }}
          >
            <ReactMarkdown className="overflow-y-auto text-justify text-sm md:max-h-40">
              {project.description}
            </ReactMarkdown>
            <p className="mt-2 text-right text-sm italic">
              {project.technologies.map((t) => t.name).join(", ")}
            </p>
          </motion.div>
        </div>
      </article>
    </AnimatePresence>
  );
};

export default ProjectArticle;
