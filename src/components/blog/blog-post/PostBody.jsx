import React, { useContext, useState } from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import { renderRule, StructuredText } from "react-datocms";
import styled, { keyframes } from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark as codeBlockTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";

import CopyIcon from "../../../images/svg/icons/copy.svg";
import { isCode } from "datocms-structured-text-utils";
import CmsDataContext from "../../utils/context/data-context";

const ContentWrapper = styled.article`
  padding: 1.75rem 2.25rem;
  margin: 0 auto;

  code {
    tab-size: 2;
  }

  @media (max-width: 768px) {
    code {
      tab-size: 1;
    }
  }
`;

const CopyButton = styled.button`
  position: absolute;
  right: calc(0.5em + 5px);
  top: 0.45em;
`;

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

`;

const CopiedToClipboard = styled.dialog`
  z-index: 120;
  position: fixed;
  bottom: -50px;
  opacity: 0;
  padding: 1rem;
  border-radius: 8px;
  animation: ${slideInOutFromBottom} 3s ease;
`;

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
`;

export const BlogPostImage = ({ image, title }) => {
  return (
    <div className="mx-4 -mt-2 rounded-md bg-gray-50 p-4 pb-1 dark:bg-gray-700">
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.alt}
        title={image.title}
      />
      <p className="mt-2 mb-2 text-center italic">{title}</p>
    </div>
  );
};

const PostBody = () => {
  const [copied, setCopied] = useState(false);

  const { blogPost } = useContext(CmsDataContext);

  const copyToClipBoard = (code) => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <ContentWrapper className="md:prose-md prose dark:prose-invert lg:prose-lg">
        <StructuredText
          data={blogPost.content}
          customRules={[
            renderRule(isCode, ({ node, key }) => {
              return (
                <div className="max-W-3xl-mt-2 relative" key={key}>
                  <CopyButton
                    onClick={() => copyToClipBoard(node.code)}
                    className="text-gray-100 hover:text-white"
                    aria-label="Copy to clipboard"
                  >
                    <CopyIcon className="h-5 w-5" />
                  </CopyButton>
                  <SyntaxHighlighter
                    language={node.language}
                    style={codeBlockTheme}
                    showLineNumbers
                    customStyle={{
                      marginBottom: "1rem",
                      borderRadius: "6px",
                    }}
                  >
                    {node.code}
                  </SyntaxHighlighter>
                </div>
              );
            }),
          ]}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "DatoCmsBlogPostImage":
                return (
                  <BlogPostImage
                    image={record.image}
                    title={
                      record.imageTitle ? record.imageTitle : record.image.title
                    }
                  />
                );
              case "DatoCmsBlogPostAside":
                return (
                  <Aside className="border-gray-400 bg-gray-200  dark:border-gray-400 dark:bg-gray-700">
                    {record.content}
                  </Aside>
                );
              default:
                return null;
            }
          }}
        />
      </ContentWrapper>
      <CopiedToClipboard
        open={copied}
        className="bg-gray-50 text-gray-800 shadow-md dark:bg-gray-900 dark:text-gray-50"
      >
        {blogPost.copiedMessage}
      </CopiedToClipboard>
    </>
  );
};

export default PostBody;
