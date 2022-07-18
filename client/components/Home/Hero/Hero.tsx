import React from 'react';

import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

import { useHomeContext } from '../';
import { getStrapiMedia } from '@helpers/strapi';
import useWindowWidth from '@hooks/use-window-width';
import { Hero as HeroModel } from '@models/Hero';

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
    background-color: #a7c7e7;
    border-radius: 0.5rem;
    color: #f9fafb;
    text-align: right;
    padding-right: 0.4rem;
    padding-top: 0.5rem;
    transition: all 500ms ease;
    animation: ${rotateImageBg} 500ms 1.75s forwards;
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
`;

const Hero = () => {
  const {
    home: { hero },
  } = useHomeContext();
  const { isMobile } = useWindowWidth();

  return (
    <section
      className="min-h-screen w-full flex items-center bg-gray-50"
      id="hero"
    >
      <div className="container flex flex-col md:flex-row px-6 xl:px-40 md:gap-12">
        <Bio className="md:w-2/3">
          <h1 className="text-4xl slideInBottom">{hero.title}</h1>
          <h2 className="mb-2 text-2xl slideInBottom">{hero.subtitle}</h2>
          <p className="grid gap-1 text-justify slideInBottom">
            {hero.biography.split('\n').map((x, i) => (
              <span key={i}>{x}</span>
            ))}
          </p>
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
    className="md:w-1/3 w-44 h-44 md:h-auto ml-auto fadeIn"
    href={getStrapiMedia(hero.CV.url)}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="relative w-full h-full rounded-lg shadow overflow-hidden">
      <Image
        src={getStrapiMedia(hero.profilePicture.url)}
        alt=""
        layout="fill"
        objectFit="cover"
        sizes="50vw"
      />
    </div>
  </ImageWrapper>
);

export default Hero;
