import React from "react";

import Image from "next/image";
import styled, { keyframes } from "styled-components";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

import { Hero as HeroModel } from "@models/Hero";
import useWindowWidth from "@hooks/use-window-width";
import { useHomeContext } from "../";
import { defineMessage, useIntl } from "react-intl";

const rotateImageBg = keyframes`
  from {
    width: 100%;
    transform: rotate(0) translate3d(0, 0, 0);
  }
  to {
    width: 106%;
    transform: rotate(2deg) translate3d(0.5rem, 0.5rem, 0);
  }
`;

const ImageWrapper = styled.a`
  position: relative;
  isolation: isolate;
  animation-delay: 1.5s;

  &::before {
    content: "CV";
    position: absolute;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    text-align: right;
    background-color: #78716c;
    border-radius: 0.5rem;
    color: #f9fafb;
    text-align: right;
    padding-right: 0.4rem;
    padding-top: 0.5rem;
    transition: all 500ms ease;
    animation: ${rotateImageBg} 500ms 2.25s forwards;
  }

  .dark &::before {
    background-color: #507ca9;
  }

  &:hover::before {
    left: 1rem;
    padding-right: 0.6rem;
    font-size: 1.25rem;
  }
`;

const Bio = styled.div`
  h1 {
    animation-delay: 1s;
  }

  h2,
  p,
  & > div {
    animation-delay: 1.25s;
  }

  p:first-child::first-letter {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    font-size: 3.5rem;
    float: left;
    margin-right: 0.25rem;
    line-height: 1;
  }

  strong {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    font-size: 0.8rem;
    background-color: rgb(15, 23, 42);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    color: #f8fafc;
    white-space: nowrap;
  }

  .dark strong {
    color: rgb(249, 250, 251);
    background-color: rgb(15, 23, 42);
  }
`;

const Divider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  & svg {
    position: relative;
    display: block;
    width: calc(151% + 1.3px);
    height: 150px;
  }
`;

const Hero = () => {
  const {
    home: { hero },
  } = useHomeContext();
  const { isMobile } = useWindowWidth();

  return (
    <section
      className="relative flex min-h-screen w-full items-center"
      id="hero"
    >
      <div className="container flex flex-col px-6 md:flex-row md:gap-12 xl:px-40">
        <Bio className="md:w-2/3">
          <h1 className="slideInBottom text-4xl">{hero.title}</h1>
          <h2 className="slideInBottom mb-2 text-2xl">{hero.subtitle}</h2>
          <div className="slideInBottom grid gap-1 text-justify">
            <ReactMarkdown>{hero.biography}</ReactMarkdown>
          </div>
          {!isMobile && (
            <div className="slideInBottom mt-4 flex gap-3">
              <SocialButtons />
            </div>
          )}
        </Bio>
        {isMobile ? (
          <div className="flex">
            <div
              className="slideInBottom mt-4 flex flex-col items-center justify-center gap-3"
              style={{ animationDelay: "1.25s" }}
            >
              <SocialButtons />
            </div>
            <ProfilePicture hero={hero} />
          </div>
        ) : (
          <ProfilePicture hero={hero} />
        )}
      </div>

      <Divider>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white dark:fill-gray-900"
          ></path>
        </svg>
      </Divider>
    </section>
  );
};

const SocialButtons = () => (
  <>
    <motion.a
      className="flex w-28 items-center justify-center gap-1 rounded-lg bg-slate-900 py-2 text-gray-50 shadow transition-shadow duration-200 hover:shadow-md"
      href="https://github.com/Zareix"
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
      </svg>
      Github
    </motion.a>
    <motion.a
      className="flex w-28 items-center justify-center gap-1 rounded-lg bg-sky-600 py-2 text-gray-50 shadow transition-shadow duration-200 hover:shadow-md"
      href="https://www.linkedin.com/in/raphaël-gonçalves-catarino"
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
      </svg>
      LinkedIn
    </motion.a>
  </>
);

const ProfilePicture = ({ hero }: { hero: HeroModel }) => {
  const intl = useIntl();
  const label = defineMessage({
    id: "hero_cv_link",
    defaultMessage: "Télécharger mon Curriculum vitae",
    description: "Hero cv link",
  });

  return (
    <ImageWrapper
      className="fadeIn ml-auto mr-6 h-44 w-44 md:h-auto md:w-1/3"
      href={hero.CV.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={intl.formatMessage(label)}
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg shadow">
        <Image
          src={hero.profilePicture.url}
          alt=""
          blurDataURL={hero.profilePicture.placeHolder}
          placeholder="blur"
          priority
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>
    </ImageWrapper>
  );
};

export default Hero;
