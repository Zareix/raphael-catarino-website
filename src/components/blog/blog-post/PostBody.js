import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { CopyBlock, dracula as codeTheme } from "react-code-blocks"

const ContentWrapper = styled.article`
  padding: 1.75rem 2.25rem;

  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    // text-gray-600
    --tw-text-opacity: 1 !important;
    color: rgba(75, 85, 99, var(--tw-text-opacity)) !important;

    //dark:text-gray-400
    @media (prefers-color-scheme: dark) {
      & {
        color: rgba(156, 163, 175, var(--tw-text-opacity)) !important;
      }
    }
  }

  h4 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
    text-align: justify;

    &::before {
      display: inline-block;
      content: "";
      width: 0.5rem;
    }
  }

  code {
    tab-size: 2;
  }

  @media (max-width: 768px) {
    code {
      tab-size: 1;
    }
  }
`

export const BlogPostImage = ({ image, title }) => {
  return (
    <div className="mx-4 p-4 pb-1 rounded-md bg-gray-50 dark:bg-gray-800">
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.alt}
        title={image.title}
      />
      <p className="mt-2 mb-2 text-center italic">{title}</p>
    </div>
  )
}

const PostBody = ({ content }) => {
  return (
    <ContentWrapper>
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          if (record.__typename === "DatoCmsBlogPostImage") {
            return (
              <BlogPostImage
                image={record.image}
                title={
                  record.imageTitle ? record.imageTitle : record.image.title
                }
              />
            )
          } else if (record.__typename === "DatoCmsBlogCodeBlock") {
            return (
              <div className="mb-5 max-w-3xl">
                <CopyBlock
                  text={record.code}
                  wrapLines={false}
                  language={record.language}
                  theme={codeTheme}
                  highlight={
                    record.highlightedLines ? record.highlightedLines : ""
                  }
                />
              </div>
            )
          }

          return (
            <>
              <p>Don't know how to render a block!</p>
              <pre>{JSON.stringify(record, null, 2)}</pre>
            </>
          )
        }}
      />
    </ContentWrapper>
  )
}

export default PostBody
