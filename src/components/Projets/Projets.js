import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiFillGithub } from "react-icons/ai"
import { FormattedDate, FormattedMessage, useIntl } from "react-intl"

const Button = () => (
  <button
    type="button"
    className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold w-full transition ease-in duration-200 text-center text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-indigo-200 rounded-lg "
  >
    <FormattedMessage id="projectLinkText" />
  </button>
)

const Projets = () => {
  const projets = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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

  const getProjectTitleDesc = (frontmatter) => {
    let locale = intl.locale.substring(0, 2)
    switch (locale) {
      case "fr":
        return [frontmatter.titleFr, frontmatter.description]
      case "en":
        return [frontmatter.titleEn, frontmatter.description]
      default:
        return [frontmatter.titleFr, frontmatter.description]
    }
  }

  return (
    <div id="projets">
      <h1 className="text-3xl font-bold text-center">
        <FormattedMessage id="projectMainTitle" />
      </h1>
      <div className="flex flex-wrap justify-center md:px-6 md:mt-6">
        {projets.allMarkdownRemark.edges.map(({ node: projet }) => (
          <div key={projet.id} className="w-11/12 md:w-1/3 md:px-6 py-5">
            <div className="h-full shadow-lg transform ease-out duration-500 hover:scale-105">
              <GatsbyImage
                image={
                  projet.frontmatter.featuredImage.childImageSharp
                    .gatsbyImageData
                }
                alt={getProjectTitleDesc(projet.frontmatter)[0]}
                className="max-h-56"
              />

              <div className="px-4 py-4 md:px-10">
                <h1 className="font-semibold text-lg">
                  {getProjectTitleDesc(projet.frontmatter)[0]}
                </h1>

                <p className="py-4 text-justify">
                  {getProjectTitleDesc(projet.frontmatter)[1]}
                </p>

                <p className="italic">{projet.frontmatter.langages}</p>

                <div className="flex pt-8 items-center align-bottom h-full">
                  <div className="w-full md:w-2/3 text-sm font-medium">
                    <FormattedDate
                      value={projet.frontmatter.date}
                      year="numeric"
                      month="long"
                      day="2-digit"
                    />
                  </div>

                  {/* Liens */}
                  <div className="w-full flex justify-end gap-4 text-sm font-medium text-white text-center">
                    {projet.frontmatter.github && (
                      <a
                        href={projet.frontmatter.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-auto"
                      >
                        <AiFillGithub
                          className="text-gray-900 hover:text-gray-700"
                          size={35}
                        />
                      </a>
                    )}
                    {projet.frontmatter.site && (
                      <a
                        href={projet.frontmatter.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projets
