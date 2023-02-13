import Image from "next/image";
import styled, { keyframes } from "styled-components";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import { Hero as HeroModel } from "@models/Hero";
import useWindowWidth from "@hooks/use-window-width";
import { useHomeContext } from "../";
import { defineMessage, useIntl } from "react-intl";
import { useEffect, useRef } from "react";

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

const Hero = () => {
  const {
    home: { hero },
  } = useHomeContext();
  const { isMobile } = useWindowWidth();

  return (
    <section
      className="relative flex w-full items-center pt-24 pb-16 md:min-h-screen md:py-0"
      id="hero"
    >
      <div className="container flex flex-col px-6 md:flex-row md:gap-12 xl:px-40">
        <Bio className="z-10 md:w-2/3">
          <h1 className="slideInBottom text-4xl">{hero.title}</h1>
          <h2 className="slideInBottom mb-2 text-2xl">{hero.subtitle}</h2>
          <div className="slideInBottom grid gap-1 text-justify">
            <ReactMarkdown>{hero.biography}</ReactMarkdown>
          </div>
          {!isMobile && (
            <div className="slideInBottom mt-4 flex gap-3">
              <SocialButtons cv={hero.CV.url} />
            </div>
          )}
        </Bio>
        {isMobile ? (
          <div className="flex">
            <div
              className="slideInBottom z-10 mt-4 flex flex-col items-center justify-center gap-3"
              style={{ animationDelay: "1.25s" }}
            >
              <SocialButtons cv={hero.CV.url} />
            </div>
            <ProfilePicture hero={hero} />
          </div>
        ) : (
          <ProfilePicture hero={hero} />
        )}
      </div>
    </section>
  );
};

const SocialButtons = ({ cv }: { cv: string }) => {
  const intl = useIntl();
  const label = defineMessage({
    id: "hero_cv_link",
    defaultMessage: "Télécharger mon Curriculum vitae",
    description: "Hero cv link",
  });

  return (
    <>
      <motion.a
        className="flex w-28 items-center justify-center gap-1 rounded-lg bg-slate-900 py-2 text-gray-50 shadow transition-shadow duration-200 hover:shadow-md"
        href="https://github.com/Zareix"
        target="_blank"
        rel="noopener noreferrer"
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
        className="flex w-28 items-center justify-center gap-1 rounded-lg bg-[#0B65C2] py-2 text-gray-50 shadow transition-shadow duration-200 hover:shadow-md"
        href="https://www.linkedin.com/in/raphaël-gonçalves-catarino"
        target="_blank"
        rel="noopener noreferrer"
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
      <motion.a
        className="flex w-28 items-center justify-center gap-1 rounded-lg bg-blue-800 py-2 text-gray-50 shadow transition-shadow duration-200 hover:shadow-md"
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={intl.formatMessage(label)}
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
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
            clipRule="evenodd"
          ></path>
          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"></path>
        </svg>
        Mon CV
      </motion.a>
    </>
  );
};

const ProfilePicture = ({ hero }: { hero: HeroModel }) => {
  const tiltRef = useRef(null);
  useEffect(() => {
    if (!tiltRef.current) return;
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 700,
      reverse: true,
      scale: 1.1,
      glare: true,
      "max-glare": 0.4,
    });

    return () => {};
  }, [tiltRef]);

  return (
    <div className="fadeIn relative ml-auto mr-6 h-44 w-44 md:h-auto md:w-1/3">
      <div className="absolute -z-10 h-full w-full rotate-90 scale-[6] opacity-[0.05] invert dark:opacity-[0.02] dark:filter-none">
        <Image src="/hero-bg.svg" alt="dddepth" fill className="object-fill" />
      </div>
      <div
        className="relative h-full w-full overflow-hidden rounded-xl shadow"
        ref={tiltRef}
      >
        <Image
          src={hero.profilePicture.url}
          alt={hero.profilePicture.alternativeText}
          blurDataURL={hero.profilePicture.placeHolder}
          placeholder="blur"
          priority
          fill
          quality={100}
          sizes="(max-width: 640px) 70vw, 20vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
