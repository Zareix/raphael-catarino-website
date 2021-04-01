import React from "react"
import styled from "styled-components"

const PresentationWrapper = styled.div`
    margin: 0;
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.875rem;
    line-height: 2.25rem;
  `

const Presentation = () => {
  return (
    <PresentationWrapper className="bg-gradient-to-br from-red-900 to-purple-900">
      <div className="relative -top-7 text-center md:text-justify md:-left-56">
        <h1 className="font-bold text-4xl md:text-5xl dark:text-blue-300">Raphaël Catarino</h1>
        <h2 className="mt-2">Etudiant en DUT Informatique</h2>
      </div>
    </PresentationWrapper>
  )
}

export default Presentation
