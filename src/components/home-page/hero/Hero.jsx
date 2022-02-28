import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import Illustration from "../../../images/svg/hero_illustration.svg";
import BgHero from "../../../images/svg/hero-bg-wave.svg";
import CmsDataContext from "../../utils/context/data-context";

const textAppear = keyframes`
  100%{
    transform: translateY(0);
  }
`;

const underlineExpand = keyframes`
  100%{
    width: 150px;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  font-size: 1.875rem;
  line-height: 2.25rem;
  display: grid;

  h1 {
    overflow: hidden;
    span {
      display: block;
      transform: translateY(100%);
      animation: ${textAppear} 1s 2.5s forwards;
    }
  }

  h2 {
    overflow: hidden;
    span {
      display: block;
      transform: translateY(100%);
      animation: ${textAppear} 1s 3s forwards;
    }
  }

  .text-section::after {
    content: "";
    display: block;
    height: 20px;
    width: 0px;
    border-bottom: rgba(156, 163, 175, 0.3) 3px solid;
    animation: ${underlineExpand} 1.5s 3.75s cubic-bezier(0.22, 1, 0.36, 1)
      forwards;
  }

  .dark & {
    .illustration-screen-right,
    .illustration-camera {
      fill: #1f2937;
    }

    .illustration-screen-left {
      fill: #111827;
    }

    .illustration-text > * {
      fill: white;
    }

    .illustration-computer {
      fill: #e2e8f0;
    }
  }

  @media (max-width: 768px) {
    height: 80vh;
  }

  .dark & {
    .text-section::after {
      border-color: rgba(249, 250, 251, 0.2);
    }
  }
`;

const HeroWrapper = styled.div`
  z-index: 10;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  grid-area: 1/1;
`;

const BGWrapper = styled.div`
  grid-area: 1/1;
  display: flex;
  align-items: flex-end;

  svg {
    width: 100%;
    margin-bottom: -4px;
  }

  svg path {
    fill: rgb(249 250 251);
  }

  .dark & {
    svg path {
      fill: rgb(17 24 39);
    }
  }
`;

const Hero = () => {
  const { hero } = useContext(CmsDataContext);

  return (
    <HeroSection className="bg-white dark:bg-slate-800">
      <HeroWrapper className="gap-8 md:gap-0">
        <div className="md:w-1/2">
          <div className="mx-auto w-fit text-section">
            <h1 className="font-bold text-4xl md:text-5xl">
              <span>{hero.presTitle}</span>
            </h1>
            <h2 className="mt-2 text-gray-400">
              <span>{hero.presSubtitle}</span>
            </h2>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Illustration className="w-3/4 md:w-2/3 h-full mx-auto" />
        </div>
      </HeroWrapper>
      <BGWrapper>
        <BgHero />
      </BGWrapper>
    </HeroSection>
  );
};

export default Hero;
