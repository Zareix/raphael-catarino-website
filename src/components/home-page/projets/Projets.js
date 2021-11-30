import React, { useState } from "react"

import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Tippy from "@tippyjs/react"
import { AnimatePresence, motion } from "framer-motion"

import GithubIcon from "../../../images/svg/icons/github.svg"
import ExternalLinkIcon from "../../../images/svg/icons/externalLink.svg"

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
  justify-content: center;
  align-items: center;
`

const SelectedProject = styled(motion.article)`
  width: 60%;
  max-width: 40rem;
  padding: 2rem;
  background-color: white;
  border-radius: 1.5rem;

  @media (max-width: 768px) {
    width: auto;
  }
`

const Projets = ({
  data,
  title,
  subtitle,
  defaultShownItems,
  stepShowMore,
  showMoreLabel,
}) => {
  const [shownItems, setShownItems] = useState(defaultShownItems)
  const [selectedProject, setSelectedProject] = useState()
  const projets = data.edges

  const showMore = () => setShownItems(shownItems + stepShowMore)

  return (
    <>
      <section id="projets">
        <h1 className="text-3xl font-bold text-center">{title}</h1>
        <h2 className="text-lg text-center text-gray-600 dark:text-gray-400 w-4/5 mx-auto mb-8">
          {subtitle}
        </h2>
        <div className="container mx-auto px-0 md:px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4 px-4 md:px-0">
            {projets.slice(0, shownItems).map(({ node: project }) => (
              <motion.article
                key={project.id}
                className=" bg-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-white group shadow-xl hover:shadow-sm cursor-pointer w-full rounded-3xl flex flex-col items-center justify-center transition-colors duration-500 ease-in-out"
                onClick={() => setSelectedProject(project)}
                layoutId={project.id}
              >
                <div className="relative mt-2 mx-2">
                  <div className="h-56 rounded-2xl overflow-hidden">
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
                      <Tippy
                        content="Github"
                        offset={[0, 12]}
                        arrow
                        animation="shift-away"
                      >
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
                      <Tippy
                        content="Lien"
                        arrow
                        animation="shift-away"
                        offset={[0, 12]}
                      >
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
                <div className="pt-10 pb-6 w-full px-4">
                  <h2 className="font-medium leading-none text-base tracking-wider text-gray-400 group-hover:text-gray-100 dark:text-gray-300 dark:group-hover:text-gray-800">
                    {project.title}
                  </h2>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        {shownItems < projets.length && (
          <button
            onClick={showMore}
            className="block mx-auto mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600 dark:focus:ring-offset-blue-400 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
          >
            {showMoreLabel}
          </button>
        )}
      </section>
      <AnimatePresence>
        {selectedProject && (
          <SelectedProjectOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject(undefined)}
          />
        )}
      </AnimatePresence>
      {selectedProject && (
        <SelectedProjectWrapper onClick={() => setSelectedProject(undefined)}>
          <SelectedProject
            layoutId={selectedProject.id}
            onClick={(e) => {
              e.stopPropagation()
              e.nativeEvent.stopImmediatePropagation()
            }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow">
                <GatsbyImage
                  image={selectedProject.featuredImage.gatsbyImageData}
                  title={selectedProject.featuredImage.title}
                  alt={selectedProject.featuredImage.alt}
                  className="w-full h-full bg-white dark:bg-gray-200"
                  objectFit="cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row">
                {selectedProject.isOnGithub && (
                  <Tippy
                    content="Github"
                    offset={[0, 12]}
                    arrow
                    animation="shift-away"
                  >
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 flex items-center justify-center text-xl bg-white hover:bg-gray-700 text-gray-700 hover:text-white dark:bg-purple-800 dark:hover:bg-white dark:text-white dark:hover:text-purple-800 rounded-2xl shadow-lg transform-gpu translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    >
                      <GithubIcon className="h-3/5 w-3/5" />
                    </a>
                  </Tippy>
                )}
                {selectedProject.isProjectLink && (
                  <Tippy
                    content="Lien"
                    arrow
                    animation="shift-away"
                    offset={[0, 12]}
                  >
                    <a
                      href={selectedProject.link}
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
              <h2 className="text-xl font-semibold">{selectedProject.title}</h2>
              <aside className="w-fit mt-1 ml-1 pl-3 pr-2 border-l-4 italic rounded-sm rounded-r-md border-gray-400 bg-gray-200  dark:border-gray-400 dark:bg-gray-700">
                {selectedProject.technologies.map((l, index) => (
                  <span key={index}>
                    {l.nom}
                    {index === selectedProject.technologies.length - 1
                      ? ""
                      : ", "}
                  </span>
                ))}
              </aside>
              <p className="text-justify">{selectedProject.desc}</p>
            </div>
          </SelectedProject>
        </SelectedProjectWrapper>
      )}
    </>
  )
}

export default Projets

export const fragmentProjects = graphql`
  fragment Project on DatoCmsProject {
    id
    featuredImage {
      alt
      title
      gatsbyImageData(placeholder: DOMINANT_COLOR, width: 500)
    }
    title
    desc
    technologies {
      nom
    }
    date(formatString: "DD MMMM YYYY", locale: $locale)
    isOnGithub
    githubLink
    isProjectLink
    link
  }
`
