import React, { useContext } from "react";

import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import CmsDataContext from "../../utils/context/data-context";

const BlogPost = styled(Link)`
  width: 90%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;

  h3 {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

const NoContent = styled.li`
  display: none;

  &:only-child {
    display: block;
    margin-inline: 0.5rem;
    font-style: italic;
    text-align: center;
  }
`;

const SidePanel = () => {
  const {
    pageLocation,
    allBlogPosts,
    blogPost: { id: currentPostId },
  } = useContext(CmsDataContext);

  return (
    <section className="mx-5 mb-10 mt-12 md:m-0 md:w-1/4" id="sidePanel">
      <div className="top-24 md:sticky">
        <div className="overflow-hidden rounded-2xl bg-white  py-4 shadow-md dark:bg-gray-800">
          <h2 className="mx-3 mb-3 border-b border-gray-800 border-opacity-10 pb-2 text-center text-xl font-bold dark:border-gray-600">
            Les derniers posts
          </h2>
          <ul>
            {allBlogPosts
              .filter(({ node: p }) => p.id !== currentPostId)
              .map(({ node: p }) => (
                <BlogPost
                  to={
                    (pageLocation.pathname.match(/(\/(..)\/)/)
                      ? pageLocation.pathname.match(/(\/(..)\/)/)[1]
                      : "/") +
                    "blog/" +
                    p.slug
                  }
                  className="border border-gray-800 border-opacity-10 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
                  key={p.id}
                >
                  <GatsbyImage
                    image={p.featuredImage.gatsbyImageData}
                    alt={p.featuredImage.alt}
                    title={p.featuredImage.title}
                    className="w-1/4 md:w-1/3"
                  />
                  <div className="ml-2">
                    <h3 className="text-sm">{p.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {p.publishDate}
                    </p>
                  </div>
                </BlogPost>
              ))}
            <NoContent>Pas d'autre post pour le moment</NoContent>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SidePanel;