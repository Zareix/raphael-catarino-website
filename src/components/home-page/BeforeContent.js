import React from "react"

import styled from "styled-components"
import { animateScroll as scroll } from "react-scroll"

import ScrollDownArrowIcon from "../../images/svg/icons/scrollDownArrow.svg"

const Wrapper = styled.div`
  position: relative;
  top: -10vh;
  width: 100%;
  height: 45px;
  display: grid;
  justify-content: center;
  z-index: 30;

  @media (max-width: 768px) {
    top: -20vh;
  }
`

const BeforeContent = () => {
  const doScroll = () =>
    scroll.scrollMore(500, {
      duration: 800,
    })

  return (
    <Wrapper id="bio" className="animate-bounce">
      <button className="cursor-pointer" onClick={doScroll}>
        <ScrollDownArrowIcon className="text-white h-8 w-8" />
      </button>
    </Wrapper>
  )
}

export default BeforeContent
