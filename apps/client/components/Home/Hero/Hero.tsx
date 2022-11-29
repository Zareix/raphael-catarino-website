import React from "react";

import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
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
      <IoLogoGithub size={24} />
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
      <IoLogoLinkedin size={24} />
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
          layout="fill"
          objectFit="cover"
          sizes="50vw"
          blurDataURL={hero.profilePicture.placeHolder}
          placeholder="blur"
          priority
        />
      </div>
    </ImageWrapper>
  );
};

export default Hero;
