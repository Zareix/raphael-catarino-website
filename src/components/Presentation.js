import React from "react"

import styled from "styled-components"

import Illustration from "../images/svg/presentation_illustration.svg"
import Blob from "../images/svg/presentation_blob.svg"

const PresentationSection = styled.section`
  margin: 0;
  color: white;
  height: 100vh;
  font-size: 1.875rem;
  line-height: 2.25rem;
`

const PresentationWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const BlobStyled = styled(Blob)`
  position: absolute;
  transform: translateY(-25%);
`

const Presentation = () => {
  return (
    <PresentationSection className="bg-gradient-to-br from-red-900 to-purple-900">
      <PresentationWrapper className="gap-8 md:gap-0">
        <div className="md:w-1/2">
          <div className="mx-auto w-fit">
            <h1 className="font-bold text-4xl md:text-5xl">Raphaël Catarino</h1>
            <h2 className="mt-2">Développeur full-stack</h2>
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
