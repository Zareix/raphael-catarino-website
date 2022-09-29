import React from 'react';

import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';

import { Hero as HeroModel } from '@models/Hero';
import useWindowWidth from '@hooks/use-window-width';
import { useHomeContext } from '../';

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
  animation-delay: 1s;

  &::before {
    content: 'CV';
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
    animation: ${rotateImageBg} 500ms 1.75s forwards;
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
    animation-delay: 500ms;
  }

  h2,
  p,
  & > div {
    animation-delay: 700ms;
  }

  p:first-child::first-letter {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
    font-size: 3.5rem;
    float: left;
    margin-right: 0.25rem;
    line-height: 1;
  }

  strong {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
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
      className="min-h-screen w-full flex relative items-center bg-stone-100 dark:bg-gray-800 dark:text-gray-50"
      id="hero"
    >
      <div className="container flex flex-col md:flex-row px-6 xl:px-40 md:gap-12">
        <Bio className="md:w-2/3">
          <h1 className="text-4xl slideInBottom">{hero.title}</h1>
          <h2 className="mb-2 text-2xl slideInBottom">{hero.subtitle}</h2>
          <div className="grid gap-1 text-justify slideInBottom">
            <ReactMarkdown>{hero.biography}</ReactMarkdown>
          </div>
          {!isMobile && (
            <div className="mt-4 flex gap-3 slideInBottom">
              <SocialButtons />
            </div>
          )}
        </Bio>
        {isMobile ? (
          <div className="flex">
            <div className="mt-4 flex flex-col gap-3 items-center justify-center slideInBottom">
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
    <a
      className="bg-slate-900 text-gray-50 flex items-center gap-1 w-28 justify-center py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow hover:shadow-md"
      href="https://github.com/Zareix"
    >
      <IoLogoGithub size={24} />
      Github
    </a>
    <a
      className="bg-sky-600 text-gray-50 flex items-center gap-1 w-28 justify-center py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow hover:shadow-md"
      href="https://www.linkedin.com/in/raphaël-gonçalves-catarino"
    >
      <IoLogoLinkedin size={24} />
      LinkedIn
    </a>
  </>
);

const ProfilePicture = ({ hero }: { hero: HeroModel }) => (
  <ImageWrapper
    className="md:w-1/3 w-44 h-44 md:h-auto ml-auto fadeIn mr-6"
    href={hero.CV.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="relative w-full h-full rounded-lg shadow overflow-hidden">
      <Image
        src={hero.profilePicture.url}
        alt=""
        layout="fill"
        objectFit="cover"
        sizes="50vw"
        blurDataURL={hero.profilePicture.placeHolder}
        placeholder="blur"
      />
    </div>
  </ImageWrapper>
);

export default Hero;
