import React from 'react';

import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

import { useHomeContext } from '../../../pages';
import { getStrapiMedia } from '@/helpers/strapi';

const imageBg = keyframes`
  from {
    width: 100%;
    transform: rotate(0) translate3d(0, 0, 0);
  }
  to {
    width: 102%;
    transform: rotate(2deg) translate3d(0.5rem, 0.5rem, 0);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    height: 100%;
    background-color: #a7c7e7;
    border-radius: 0.5rem;
    animation: ${imageBg} 500ms 1.5s forwards;
  }
`;

const Bio = styled.div`
  h1 {
    animation-delay: 500ms;
  }

  h2 {
    animation-delay: 700ms;
  }

  p {
    animation-delay: 700ms;
  }
`;

const Hero = () => {
  const {
    home: { hero },
  } = useHomeContext();

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
        </Bio>
        <ImageWrapper className="md:w-1/3 w-44 h-44 md:h-auto ml-auto">
          <div className="relative w-full h-full rounded-lg shadow overflow-hidden">
            <Image
              src={getStrapiMedia(hero.profilePicture.url ?? '')}
              alt=""
              layout="fill"
              objectFit="cover"
              sizes="50vw"
            />
          </div>
        </ImageWrapper>
      </div>
    </section>
  );
};

export default Hero;
