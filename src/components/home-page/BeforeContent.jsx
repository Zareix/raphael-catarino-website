import React from "react"

import styled from "styled-components"
import { animateScroll as scroll } from "react-scroll"
import { motion } from "framer-motion"

import { fadeInSlow } from "../utils/framer-motion-variants"

import ScrollDownArrowIcon from "../../images/svg/icons/scrollDownArrow.svg"

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 90vh;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  z-index: 30;

  @media (max-width: 768px) {
    top: 80vh;
  }
`

const BeforeContent = () => {
  const doScroll = () =>
    scroll.scrollMore(window.innerWidth <= 768 ? 400 : 500, {
      duration: 800,
    })

  return (
    <Wrapper variants={fadeInSlow} initial="hidden" animate="visible" exit="exit" key="1">
      <button className="cursor-pointer animate-bounce" onClick={doScroll}>
        <ScrollDownArrowIcon className="text-gray-700 dark:text-gray-50 h-8 w-8" />
      </button>
    </Wrapper>
  )
}

export default BeforeContent
