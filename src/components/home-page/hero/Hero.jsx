import React from "react"
import styled from "styled-components"

import Illustration from "../../../images/svg/hero_illustration.svg"
import BgHero from "../../../images/svg/hero-bg-wave.svg"

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  font-size: 1.875rem;
  line-height: 2.25rem;
  display: grid;

  .text-section::after {
    content: "";
    display: block;
    height: 20px;
    width: 150px;
    border-bottom: rgba(249, 250, 251, 0.3) 3px solid;
  }

  @media (prefers-color-scheme: dark) {
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
`

const HeroWrapper = styled.div`
  z-index: 10;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  grid-area: 1/1;
`

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

  @media (prefers-color-scheme: dark) {
    svg path {
      fill: rgb(17 24 39);
    }
  }
`

const Hero = ({ data }) => {
  return (
    <HeroSection className="bg-white dark:bg-gray-800">
      <HeroWrapper className="gap-8 md:gap-0">
        <div className="md:w-1/2">
          <div className="mx-auto w-fit text-section">
            <h1 className="font-bold text-4xl md:text-5xl">{data.presTitle}</h1>
            <h2 className="mt-2 text-gray-400">{data.presSubtitle}</h2>
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
  )
}

export default Hero
