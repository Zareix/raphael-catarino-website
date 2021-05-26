import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiFillGithub } from "react-icons/ai"

const Button = (props) => (
  <button
    type="button"
    className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
  >
    {props.children}
  </button>
)

const Projets = (props) => {
  const projets = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD/MM/YYYY")
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
            excerpt
            html
          }
        }
      }
    }
  `)

  return (
    <div id="projets">
      <h1 className="text-3xl font-bold text-center">Mes projets</h1>
      <div className="flex flex-wrap justify-center md:px-6 md:mt-6">
        {projets.allMarkdownRemark.edges.map(({ node: projet }) => (
          <div key={projet.id} className="w-11/12 md:w-1/3 md:px-6 py-5">
            <div className="h-full shadow-lg transform ease-out duration-500 hover:scale-105">
              <GatsbyImage
                image={
                  projet.frontmatter.featuredImage.childImageSharp
                    .gatsbyImageData
                }
                alt={projet.frontmatter.title}
                className="max-h-56"
              />

              <div className="px-4 py-4 md:px-10">
                <h1 className="font-bold text-lg">
                  {projet.frontmatter.title}
                </h1>

                <p className="py-4 text-justify">
                  {projet.frontmatter.description}
                </p>

                <p className="italic">{projet.frontmatter.langages}</p>

                <div className="flex pt-8 items-center align-bottom h-full">
                  <div className="w-full md:w-2/3 text-sm font-medium">
                    {projet.frontmatter.date}
                  </div>

                  {/* Liens */}
                  <div className="w-full flex justify-end gap-4 text-sm font-medium text-white text-center">
                    {projet.frontmatter.github && (
                      <a href={projet.frontmatter.github} className="my-auto">
                        <AiFillGithub
                          className="text-gray-900 hover:text-gray-700"
                          size={35}
                        />
                      </a>
                    )}
                    {projet.frontmatter.site && (
                      <a href={projet.frontmatter.site}>
                        <Button>Lien</Button>
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
