import React from "react"

import "../../styles/index.css"
import Page404 from "../../images/svg/page404.svg"

import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { HelmetDatoCms } from "gatsby-source-datocms"

const MainStyled = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

const NotFoundPage = ({ data }) => {
  return (
    <MainStyled id="404">
      <HelmetDatoCms seo={data.datoCmsPageNotFound.seoMetaTags}>
        <meta name="robots" content="noindex" />
      </HelmetDatoCms>
      <Page404 className="h-64 md:h-96" />
      <h1 className="text-2xl">{data.datoCmsPageNotFound.notFoundMessage}</h1>
      <Link to="/">
        <button className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
          {data.datoCmsPageNotFound.notFoundButtonText}
        </button>
      </Link>
    </MainStyled>
  )
}

export default NotFoundPage

export const query = graphql`
  query pageNotFoundEn {
    datoCmsPageNotFound(locale: { eq: "en" }) {
      notFoundMessage
      notFoundButtonText
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
