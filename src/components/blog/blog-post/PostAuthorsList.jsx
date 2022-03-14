import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import AuthorIcon from "../../../images/svg/icons/author.svg";
import AuthorsIcon from "../../../images/svg/icons/authors.svg";

const PostAuthorsList = ({ authors }) => {
  return (
    <div className="flex items-center">
      {authors.length > 1 ? (
        <AuthorsIcon className="h-7 w-7 rounded-full border p-1" />
      ) : authors[0].profilPicture ? (
        <GatsbyImage
          image={authors[0].profilPicture.gatsbyImageData}
          className="h-8 w-8 overflow-hidden rounded-full"
          objectFit="cover"
          alt={authors[0].profilPicture.alt}
          title={authors[0].profilPicture.title}
        />
      ) : (
        <AuthorIcon className="h-7 w-7 rounded-full border p-1" />
      )}
      <span className="ml-1 italic">
        {authors.map((author, index) => (
          <>
            {author.name}
            {index !== authors.length - 1 && <span className="mx-1">&</span>}
          </>
        ))}
      </span>
    </div>
  );
};

export default PostAuthorsList;
