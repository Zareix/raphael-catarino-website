import React, { useState } from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { StructuredText } from "react-datocms"
import styled, { keyframes } from "styled-components"
import { HiClipboardList } from "@react-icons/all-files/hi/HiClipboardList"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark as codeBlockTheme } from "react-syntax-highlighter/dist/esm/styles/hljs"

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
    color: rgba(75, 85, 99, 1) !important;

    //dark:text-gray-400
    @media (prefers-color-scheme: dark) {
      & {
        color: rgba(156, 163, 175, 1) !important;
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

const CopyButton = styled.button`
  position: absolute;
  right: calc(0.5em + 5px);
  top: 0.45em;
`

const slideInOutFromBottom = keyframes`
  0% {
    opacity : 0;
    bottom : -50px;
  }

  20%, 80% {
    opacity : 1;
    bottom : 10px;
  }

  100%{
    opacity : 0;
    bottom : -50px;
  }

`

const CopiedToClipboard = styled.dialog`
  z-index: 120;
  position: fixed;
  bottom: -50px;
  opacity: 0;
  padding: 1rem;
  border-radius: 8px;
  animation: ${slideInOutFromBottom} 3s ease;
`

const Aside = styled.aside`
  width: fit-content;
  margin-left: 1rem;
  margin-bottom: 1rem;
  padding: 0.35rem 0.75rem;
  border-left-width: 4px;
  border-radius: 0.125rem;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  font-style: italic;
`

export const BlogPostImage = ({ image, title }) => {
  return (
    <div className="-mt-2 mx-4 p-4 pb-1 rounded-md bg-gray-50 dark:bg-gray-700">
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.alt}
        title={image.title}
      />
      <p className="mt-2 mb-2 text-center italic">{title}</p>
    </div>
  )
}

const PostBody = ({ content, copiedMessage }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipBoard = (code) => {
    if (!navigator.clipboard) return
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <>
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
            } else if (record.__typename === "DatoCmsBlogPostCodeBlock") {
              return (
                <div className="relative max-w-3xl -mt-2">
                  <CopyButton
                    onClick={() => copyToClipBoard(record.code)}
                    className="text-gray-100 hover:text-white"
                    aria-label="Copy to clipboard"
                  >
                    <HiClipboardList size={25} />
                  </CopyButton>
                  <SyntaxHighlighter
                    language={record.language}
                    style={codeBlockTheme}
                    showLineNumbers={record.showLineNumbers}
                    customStyle={{
                      marginBottom: "1rem",
                      borderRadius: "6px",
                    }}
                  >
                    {record.code}
                  </SyntaxHighlighter>
                </div>
              )
            } else if (record.__typename === "DatoCmsBlogPostAside") {
              return (
                <Aside className="border-gray-400 bg-gray-200  dark:border-gray-400 dark:bg-gray-700">
                  {record.content}
                </Aside>
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
      <CopiedToClipboard
        open={copied}
        className="shadow-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-50"
      >
        {copiedMessage}
      </CopiedToClipboard>
    </>
  )
}

export default PostBody
