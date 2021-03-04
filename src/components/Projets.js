import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Projets = (props) => {
  const projets = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
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
    <div id={props.id} className="pt-8">
      <h1 className="contTitle text-center">Mes projets</h1>
      <div className="flex flex-wrap px-6">
        {projets.allMarkdownRemark.edges.map(({ node: projet }) => (
          <div key={projet.id} className="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
            <div className="h-full shadow-lg transform ease-out duration-500 hover:scale-105">
              <Img
                fluid={projet.frontmatter.featuredImage.childImageSharp.fluid}
                alt={projet.frontmatter.title}
                className="h-56"
              />
              <div className="px-4 py-4 md:px-10">
                <h1 className="font-bold text-lg">
                  {projet.frontmatter.title}
                </h1>
                <p className="py-4 text-justify">
                  {projet.frontmatter.description}
                </p>
                <p className="italic">{projet.frontmatter.langages}</p>
                <div className="flex pt-8 items-center">
                  <div className="w-full md:w-2/3 text-sm font-medium">
                    {projet.frontmatter.date}
                  </div>
                  <div className="w-full flex justify-end gap-2 text-sm font-medium text-white text-center">
                    {projet.frontmatter.github && (
                      <a
                        href={projet.frontmatter.github}
                        className="bg-blue-600 p-2 rounded-full"
                      >
                        Github
                      </a>
                    )}
                    {projet.frontmatter.site && (
                      <a
                        href={projet.frontmatter.site}
                        className="bg-blue-600 p-2 pr-3 pl-3 rounded-full"
                      >
                        Lien
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
