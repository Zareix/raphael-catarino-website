import React from "react"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiFillGithub } from "react-icons/ai"
import { HiOutlineLink } from "react-icons/hi"
import { FormattedMessage, FormattedDate } from "react-intl"
import styled from "styled-components"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 1rem;
  padding-bottom: 1.5rem;

  svg:hover {
    transition: all 150ms ease-in;
    filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.5));
  }
`

const Projets = ({ data }) => {
  const projets = data.edges

  return (
    <section id="projets">
      <h1 className="text-3xl font-bold text-center">
        <FormattedMessage id="projectMainTitle" />
      </h1>
      <div className="flex flex-wrap justify-center md:px-6 md:mt-6 xl:w-10/12 mx-auto">
        {projets.map(({ node: projet }) => (
          <article
            key={projet.id}
            className="w-full sm:w-1/2 lg:w-1/3 py-5 px-6"
          >
            <div className="h-full shadow-lg rounded overflow-hidden flex flex-col bg-white dark:bg-gray-800 transform ease-out duration-500 hover:scale-105">
              <GatsbyImage
                image={projet.featuredImage.gatsbyImageData}
                alt={projet.title}
                className="h-56 bg-white"
              />

              <Content className="px-4 md:px-10">
                <h1 className="font-semibold text-lg">{projet.title}</h1>
                <aside className="w-fit mt-1 ml-1 pl-3 pr-2 border-l-4 italic rounded-sm rounded-r-md border-gray-400 bg-gray-200  dark:border-gray-400 dark:bg-gray-700">
                  {projet.technologies.map((l, index) => (
                    <span key={index}>
                      {l.nom}
                      {index === projet.technologies.length - 1 ? "" : ", "}
                    </span>
                  ))}
                </aside>
                <p className="text-justify flex-grow mt-3">{projet.desc}</p>
                <div className="flex items-end mt-3 text-sm">
                  <div className="flex-grow font-medium">
                    <FormattedDate
                      value={projet.date}
                      year="numeric"
                      month="long"
                      day="2-digit"
                    />
                  </div>
                  {/* Liens */}
                  <div className="flex justify-end gap-4 font-medium text-white text-center">
                    {projet.isOnGithub && (
                      <a
                        href={projet.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-auto"
                      >
                        <AiFillGithub
                          className="transition-color ease-in duration-200 text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50"
                          size={35}
                        />
                      </a>
                    )}
                    {projet.isProjectLink && (
                      <a
                        href={projet.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-auto"
                      >
                        <HiOutlineLink
                          className="transition-color ease-in duration-200 text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50"
                          size={30}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </Content>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projets

export const fragmentProjects = graphql`
  fragment Project on DatoCmsProject {
    id
    featuredImage {
      gatsbyImageData(placeholder: DOMINANT_COLOR)
    }
    title
    desc
    technologies {
      nom
    }
    date
    isOnGithub
    githubLink
    isProjectLink
    link
  }
`
