"use client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";

import { Project } from "@models/Projects";
import useWindowWidth from "@helpers/useWindowWidth";
import ViewableMonitor from "@helpers/intersectionObserver";

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
      <ViewableMonitor>
        {(inView) => (
          <article
            className={`relative isolate mx-4 min-h-[200px] w-full transform cursor-pointer duration-300 md:w-max md:min-w-[350px] md:max-w-[28%] ${
              inView
                ? "translate-x-0 opacity-100 md:translate-y-0"
                : "-translate-x-9 opacity-0 md:translate-x-0 md:-translate-y-9"
            }`}
            onClick={() => setActive(project.id)}
          >
            <motion.div
              className={`group absolute inset-0 z-0 overflow-hidden rounded-lg border border-slate-300 bg-slate-100 transition-shadow dark:border-slate-600 ${
                active ? "shadow-xl" : "shadow"
              }`}
              animate={{
                translateX: active ? (isMobile ? "-120%" : "-2rem") : 0,
                width: active ? "80px" : "100%",
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
                placeholder="blur"
                blurDataURL={project.featuredImage.placeHolder}
                className={`object-cover transition-all duration-200 ${
                  active
                    ? "blur-[2px]"
                    : "blur-[2px] md:blur-0 md:group-hover:blur-[2px]"
                }`}
                fill
                sizes="60vw"
              />
              <h3
                className={`absolute left-0 top-1/2 w-full -translate-y-1/2 text-center text-2xl text-gray-50 transition-opacity duration-200  md:opacity-0 ${
                  active ? "" : "group-hover:opacity-100"
                }`}
              >
                {project.title}
              </h3>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`absolute right-2 bottom-2 text-gray-50 opacity-0 transition-opacity duration-700 ${
                  active ? "" : "md:group-hover:opacity-80"
                }`}
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc></desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="3" y1="12" x2="6" y2="12"></line>
                <line x1="12" y1="3" x2="12" y2="6"></line>
                <line x1="7.8" y1="7.8" x2="5.6" y2="5.6"></line>
                <line x1="16.2" y1="7.8" x2="18.4" y2="5.6"></line>
                <line x1="7.8" y1="16.2" x2="5.6" y2="18.4"></line>
                <path d="M12 12l9 3l-4 2l-2 4l-3 -9"></path>
              </svg>
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
        )}
      </ViewableMonitor>
    </AnimatePresence>
  );
};

export default ProjectArticle;
