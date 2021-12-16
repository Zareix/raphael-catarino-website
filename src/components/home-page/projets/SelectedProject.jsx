import React from "react"

import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"
import Tippy from "@tippyjs/react"

import GithubIcon from "../../../images/svg/icons/github.svg"
import ExternalLinkIcon from "../../../images/svg/icons/externalLink.svg"
import CloseIcon from "../../../images/svg/icons/close.svg"
import { fadeIn, slideInFromTop } from "../../utils/framer-motion-variants"

const SelectedProjectOverlay = styled(motion.div)`
  z-index: 100;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  will-change: opacity;
  inset: 0;
  background-color: hsla(0, 100%, 0%, 0.5);
  backdrop-filter: blur(4px);
`

const SelectedProjectWrapper = styled.div`
  z-index: 110;
  position: fixed;
  inset: 0;
  padding: 2rem;
  display: flex;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const SelectedProjectContent = styled(motion.article)`
  position: relative;
  width: 60%;
  max-width: 40rem;
  max-height: 90vh;
  overflow: scroll;
  padding: 1.5rem;
  padding-left: 2.5rem;
  border-radius: 1.5rem;
  margin: auto;

  ::-webkit-scrollbar-thumb {
    border-color: rgb(255, 255, 255);
    border-style: solid;
  }

  ::-webkit-scrollbar-track {
    margin-block: 1rem;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    ::-webkit-scrollbar-thumb {
      border-color: rgb(31, 41, 55);
    }
  }

  @media (max-width: 768px) {
    width: auto;
    padding: 1rem;
    padding-left: 2rem;
  }
`

const SelectedProject = ({ project, deselect }) => {
  return (
    <>
      <AnimatePresence>
        {project && (
          <SelectedProjectOverlay
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={deselect}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {project && (
          <SelectedProjectWrapper onClick={deselect}>
            <SelectedProjectContent
              drag="y"
              onDragEnd={(_event, info) => {
                if (Math.abs(info.offset.y) > 100) deselect()
              }}
              dragSnapToOrigin
              variants={slideInFromTop}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 shadow-lg"
              onClick={(e) => {
                e.stopPropagation()
                e.nativeEvent.stopImmediatePropagation()
              }}
            >
              <div className="relative">
                <CloseIcon
                  className="relative cursor-pointer h-7 w-7 ml-auto mb-2 -right-4 hover:text-gray-600"
                  onClick={deselect}
                />

                <div className="rounded-2xl overflow-hidden shadow flex items-center">
                  <GatsbyImage
                    image={project.featuredImage.gatsbyImageData}
                    title={project.featuredImage.title}
                    alt={project.featuredImage.alt}
                    className="w-full h-full bg-white dark:bg-gray-200"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row">
                  {project.isOnGithub && (
                    <Tippy content="Github" offset={[0, 12]} arrow animation="shift-away">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 flex items-center justify-center text-xl bg-white hover:bg-gray-700 text-gray-700 hover:text-white dark:bg-purple-800 dark:hover:bg-white dark:text-white dark:hover:text-purple-800 rounded-2xl shadow-lg transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                      >
                        <GithubIcon className="h-3/5 w-3/5" />
                      </a>
                    </Tippy>
                  )}
                  {project.isProjectLink && (
                    <Tippy content="Lien" arrow animation="shift-away" offset={[0, 12]}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 w-12 ml-2 bg-white hover:bg-blue-500 flex items-center justify-center font-medium text-blue-500 hover:text-white dark:bg-blue-700 dark:hover:bg-white dark:text-white dark:hover:text-blue-700 rounded-2xl shadow-lg transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                      >
                        <ExternalLinkIcon className="h-3/5 w-3/5" />
                      </a>
                    </Tippy>
                  )}
                </div>
              </div>
              <div className="mt-10 space-y-3">
                <div className="flex flex-wrap items-center">
                  <h2 className="text-xl font-semibold grow">{project.title}</h2>
                  <div className="mt-1 text-sm">{project.date}</div>
                </div>
                <aside className="w-fit mt-1 ml-1 pl-3 pr-2 border-l-4 italic rounded-sm rounded-r-md border-gray-400 bg-gray-200  dark:border-gray-400 dark:bg-gray-700">
                  {project.technologies.map((l, index) => (
                    <span key={index}>
                      {l.nom}
                      {index === project.technologies.length - 1 ? "" : ", "}
                    </span>
                  ))}
                </aside>
                <p className="text-justify">{project.desc}</p>
              </div>
            </SelectedProjectContent>
          </SelectedProjectWrapper>
        )}
      </AnimatePresence>
    </>
  )
}

export default SelectedProject
