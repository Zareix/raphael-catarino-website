import React from "react"

import { HiArrowCircleUp } from "react-icons/hi"
import { animateScroll } from "react-scroll"
import styled, { keyframes } from "styled-components"

const fadeInScale = keyframes`
  from{
    transform : scale(0.5);
    opacity : 0;
  }
  to{
    transform : scale(1);
    opacity : 0.5;
  }
`

const ButtonStyled = styled.div`
  text-decoration: none;
  position: fixed;
  bottom: 40px;
  right: 1.5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
  animation: ${fadeInScale} ease-out 500ms;
`

const ScrollButton = () => {
  return (
    <ButtonStyled id="scrollBtn">
      <HiArrowCircleUp
        onClick={() => {
          animateScroll.scrollToTop()
        }}
        size={30}
        className="hover:opacity-80"
      />
    </ButtonStyled>
  )
}

export default ScrollButton
