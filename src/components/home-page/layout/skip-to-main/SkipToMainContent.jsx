import React from "react"

import { graphql } from "gatsby"

import styled from "styled-components"

const Button = styled.a`
  z-index: 999999;
  display: block;
  position: fixed;
  top: 0;
  padding: 0.5rem 0.25rem;
  left: 50%;
  transform: translateX(-50%) translateY(-200%);
  animation: transform 250ms;

  &:focus {
    transform: translateX(-50%) translateY(0);
  }
`

const SkipToMainContent = ({ buttonText }) => {
  return (
    <Button href="#main" className="bg-gray-50 dark:bg-gray-900">
      {buttonText}
    </Button>
  )
}

export default SkipToMainContent

export const fragmentSkipToMain = graphql`
  fragment SkipToMain on DatoCmsLayout {
    skipToMainButtonText
  }
`
