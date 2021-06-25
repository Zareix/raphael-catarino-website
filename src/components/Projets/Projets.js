import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiFillGithub } from "react-icons/ai"
import { HiOutlineLink } from "react-icons/hi"
import { FormattedDate, FormattedMessage, useIntl } from "react-intl"
import styled from "styled-components"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 1rem;
  padding-bottom: 1.5rem;

  svg:hover {
    filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.5));
  }
`

const Projets = () => {
  const query = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { glob: "**/projets/**" } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              titleFr
              titleEn
              date
              description
              github
              site
              langages
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: DOMINANT_COLOR
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  const intl = useIntl()
  const { edges: projets } = query.allMarkdownRemark

  const getProjectTitleDesc = (frontmatter) => {
    let locale = intl.locale.substring(0, 2)
    switch (locale) {
      case "fr":
        return { title: frontmatter.titleFr, desc: frontmatter.description }
      case "en":
        return { title: frontmatter.titleEn, desc: frontmatter.description }
      default:
        return { title: frontmatter.titleFr, desc: frontmatter.description }
    }
  }

  return (
    <section id="projets">
      <h1 className="text-3xl font-bold text-center">
        <FormattedMessage id="projectMainTitle" />
      </h1>
      <div className="flex flex-wrap justify-center md:px-6 md:mt-6 xl:w-10/12 2xl:w-9/12 mx-auto">
        {projets.map(({ node: projet }) => (
          <article
            key={projet.id}
            className="w-full sm:w-1/2 lg:w-1/3 py-5 px-6"
          >
            <div className="h-full shadow-lg rounded overflow-hidden flex flex-col bg-white dark:bg-gray-800 transform ease-out duration-500 hover:scale-105">
              <GatsbyImage
                image={
                  projet.frontmatter.featuredImage.childImageSharp
                    .gatsbyImageData
                }
                alt={getProjectTitleDesc(projet.frontmatter).title}
                className="h-56 bg-white"
              />

              <Content className="px-4 md:px-10">
                <h1 className="font-semibold text-lg">
                  {getProjectTitleDesc(projet.frontmatter).title}
                </h1>
                <aside className="w-fit mt-1 ml-1 pl-3 pr-2 border-l-4 italic rounded-sm rounded-r-md border-gray-400 bg-gray-200  dark:border-gray-400 dark:bg-gray-700">
                  {projet.frontmatter.langages}
                </aside>
                <p className="text-justify flex-grow mt-3">
                  {getProjectTitleDesc(projet.frontmatter).desc}
                </p>
                <div className="flex items-end mt-3 text-sm">
                  <div className="w-full md:w-2/3 font-medium">
                    <FormattedDate
                      value={projet.frontmatter.date}
                      year="numeric"
                      month="long"
                      day="2-digit"
                    />
                  </div>
                  {/* Liens */}
                  <div className="w-full flex justify-end gap-4 font-medium text-white text-center">
                    {projet.frontmatter.github && (
                      <a
                        href={projet.frontmatter.github}
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
                    {projet.frontmatter.site && (
                      <a
                        href={projet.frontmatter.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-auto"
                      >
                        {/*<button
                          className="py-2 px-4 rounded-lg font-semibold w-full text-white text-center shadow-md transition ease-in duration-200 
                                            bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 
                                                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 dark:focus:ring-indigo-700 dark:focus:ring-offset-indigo-400"
                        >
                          <FormattedMessage id="projectLinkText" />
                        </button>*/}
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
