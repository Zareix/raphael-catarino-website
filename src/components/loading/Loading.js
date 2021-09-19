import React from "react"

import { motion } from "framer-motion"
import styled from "styled-components"

const LoadingWrapper = styled(motion.div)`
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

const Loading = () => {
  return (
    <LoadingWrapper
      className="bg-gray-50 dark:bg-gray-900"
      variants={slideUp}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Loading
    </LoadingWrapper>
  )
}

export default Loading
