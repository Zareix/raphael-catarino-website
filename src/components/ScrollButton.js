import React from "react"

import { HiArrowCircleUp } from "react-icons/hi"
import { animateScroll } from "react-scroll"
import styled from "styled-components"

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
