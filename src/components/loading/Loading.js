import React from "react"

import { motion } from "framer-motion"
import styled, { keyframes } from "styled-components"

const LoadingSection = styled(motion.div)`
  z-index: 10000;
  position: fixed;
  height: 100vh;
  width: 100vw;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const slideUp = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

const loading = keyframes`
  0%{
    transform : rotate(0deg);
  }
  100%{
    transform : rotate(360deg);
  }
`

const LoadingAnimation = styled.div`
  position: relative;
  height: 5rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2rem;
  border-radius: 14px;

  span {
    z-index: 10150;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 10130;
    inset: 5px;
    background-color: rgba(249, 250, 251);
    border-radius: 14px;

    @media (prefers-color-scheme: dark) {
      background-color: rgba(17, 24, 39);
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 10100;
    height: 500%;
    width: 50px;
    background-color: rgba(17, 24, 39);
    animation: ${loading} infinite 2.5s;

    @media (prefers-color-scheme: dark) {
      background-color: rgba(249, 250, 251);
    }
  }
`

const Loading = ({ text }) => {
  return (
    <LoadingSection
      className="bg-gray-50 dark:bg-gray-900"
      variants={slideUp}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <LoadingAnimation>
        <span>{text}</span>
      </LoadingAnimation>
    </LoadingSection>
  )
}

export default Loading
