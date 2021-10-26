import React from "react"

import styled from "styled-components"

import Illustration from "../../../images/svg/presentation_illustration.svg"
import ParticlesSection from "./ParticlesSection"

const PresentationSection = styled.section`
  margin: 0;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

const PresentationWrapper = styled.div`
  z-index: 10;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  grid-area: 1/1;
`

const Presentation = ({ data }) => {
  return (
    <PresentationSection>
      <div style={{ gridArea: "1/1" }}>
        <ParticlesSection />
      </div>
      <PresentationWrapper className="gap-8 md:gap-0">
        <div className="md:w-1/2">
          <div className="mx-auto w-fit text-section">
            <h1 className="font-bold text-4xl md:text-5xl text-gray-50">
              {data.presTitle}
            </h1>
            <h2 className="mt-2 text-gray-400">{data.presSubtitle}</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Illustration className="w-3/4 md:w-2/3 h-full mx-auto" />
        </div>
      </PresentationWrapper>
    </PresentationSection>
  )
}

export default Presentation
