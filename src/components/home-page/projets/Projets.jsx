import React, { useContext, useEffect, useState } from "react";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import GithubIcon from "../../../images/svg/icons/github.svg";
import ExternalLinkIcon from "../../../images/svg/icons/externalLink.svg";
import SelectedProject from "./SelectedProject";
import CmsDataContext from "../../utils/context/data-context";

const Projets = () => {
  const { projects } = useContext(CmsDataContext);
  const [shownItems, setShownItems] = useState(projects.defaultShownItems);
  const [selectedProject, setSelectedProject] = useState();

  useEffect(() => {
    projects.elements.sort((x, y) => {
      let c = Date.parse(y.node.ogDate) - Date.parse(x.node.ogDate);
      return c > 0 ? 1 : c < 0 ? -1 : 0;
    });
  }, [projects.elements]);

  const showMore = () => setShownItems(shownItems + projects.stepShowMore);

  return (
    <>
      <section id="projets" className="scroll-mt-20">
        <h1 className="text-center text-3xl font-bold">{projects.title}</h1>
        <h2 className="mx-auto mb-8 w-4/5 text-center text-lg text-gray-600 dark:text-gray-400">
          {projects.subtitle}
        </h2>
        <div className="container mx-auto px-0 py-4 md:px-4">
          <div className="grid grid-cols-1 justify-items-center gap-4 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3 2xl:grid-cols-4">
            {projects.elements.slice(0, shownItems).map(({ node: project }) => (
              <button
                key={project.id}
                className=" flex w-full cursor-pointer flex-col items-center justify-center rounded-3xl bg-white shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative mx-2 mt-2">
                  <div className="h-56 overflow-hidden rounded-2xl shadow">
                    <GatsbyImage
                      image={project.featuredImage.gatsbyImageData}
                      title={project.featuredImage.title}
                      alt={project.featuredImage.alt}
                      className="h-full w-full bg-white dark:bg-gray-200"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 -mb-4 ml-3 flex flex-row">
                    {project.isOnGithub && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltip tooltip-delay flex h-12 w-12 translate-y-0 transform-gpu items-center justify-center rounded-2xl bg-white text-xl text-gray-700 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-700 hover:text-white hover:shadow-lg dark:bg-purple-800 dark:text-white dark:hover:bg-white dark:hover:text-purple-800"
                        data-tooltip="Github"
                      >
                        <GithubIcon className="h-3/5 w-3/5" />
                      </a>
                    )}
                    {project.isProjectLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tooltip tooltip-delay ml-2 flex h-12 w-12 translate-y-0 transform-gpu items-center justify-center rounded-2xl bg-white font-medium text-blue-500 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-lg dark:bg-blue-700 dark:text-white dark:hover:bg-white dark:hover:text-blue-700"
                        data-tooltip="Lien"
                      >
                        <ExternalLinkIcon className="h-3/5 w-3/5" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="w-full px-4 pt-8 pb-6">
                  <h2 className="text-left text-base leading-5 tracking-wide text-gray-400 dark:text-gray-300">
                    {project.title}
                  </h2>
                </div>
              </button>
            ))}
          </div>
        </div>
        {shownItems < projects.elements.length && (
          <button
            onClick={showMore}
            className="mx-auto mt-4 block rounded-full bg-blue-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600 dark:focus:ring-offset-blue-400"
          >
            {projects.showMoreLabel}
          </button>
        )}
      </section>
      <SelectedProject
        project={selectedProject}
        deselect={() => setSelectedProject(undefined)}
      />
    </>
  );
};

export default Projets;

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
    ogDate: date
    isOnGithub
    githubLink
    isProjectLink
    link
  }
`;
