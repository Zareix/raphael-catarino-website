import React from "react"

import styled from "styled-components"
import { animateScroll as scroll } from "react-scroll"

import ScrollDownArrowIcon from "../../images/svg/icons/scrollDownArrow.svg"

const Wrapper = styled.div`
  position: relative;
  top: -10vh;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  z-index: 30;
`

const BeforeContent = () => {
  const doScroll = () =>
    scroll.scrollMore(window.innerWidth <= 768 ? 400 : 500, {
      duration: 800,
    })

  return (
    <Wrapper className="animate-bounce">
      <button className="cursor-pointer" onClick={doScroll}>
        <ScrollDownArrowIcon className="text-gray-700 dark:text-gray-50 h-8 w-8" />
      </button>
    </Wrapper>
  )
}

export default BeforeContent
