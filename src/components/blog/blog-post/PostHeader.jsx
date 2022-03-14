import React, { useContext } from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import PostAuthorsList from "./PostAuthorsList";
import useWindowWidth from "../../hooks/use-window-width";
import CmsDataContext from "../../utils/context/data-context";

const PostHeader = ({ isIndex }) => {
  const { isMobile } = useWindowWidth();

  const { blogPost, settings } = useContext(CmsDataContext);

  return (
    <>
      <GatsbyImage
        image={blogPost.featuredImage.gatsbyImageData}
        alt={blogPost.featuredImage.alt}
        title={blogPost.featuredImage.title}
        className={isIndex ? "h-52 w-full" : "h-72 w-full md:h-80"}
        objectFit="cover"
      />
      <div
        className={
          "mx-10 mt-6" +
          (isIndex ? "" : " md:prose-md prose dark:prose-invert lg:prose-lg")
        }
      >
        <h1 className={"font-bold" + (isIndex ? " text-2xl" : " !mb-0")}>
          {blogPost.title}
        </h1>
        <h2
          className={
            "my-2 font-semibold text-gray-500 dark:text-gray-300" +
            (isIndex ? " text-xl" : " !mt-2")
          }
        >
          {blogPost.subtitle}
        </h2>
        <div className="flex flex-col flex-wrap gap-1 md:flex-row md:items-center">
          <PostAuthorsList authors={blogPost.authors} />{" "}
          {!isIndex && !isMobile && <b>·</b>}
          <div
            className={
              "flex gap-1 text-sm text-gray-500 dark:text-gray-400" +
              (isIndex ? " w-full" : "") +
              (isMobile && !isIndex ? " flex-col" : "")
            }
          >
            {!isIndex && settings.dateText} {blogPost.publishDate}
            {blogPost.updateDate && (
              <>
                {(!isMobile || isIndex) && <b>·</b>}
                <span>
                  {isIndex ? "MaJ : " : settings.updatedDateText}{" "}
                  {blogPost.updateDate}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
