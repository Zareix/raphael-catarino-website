import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { fadeInSlow } from "../utils/framer-motion-variants";

import ScrollDownArrowIcon from "../../images/svg/icons/scrollDownArrow.svg";

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
`;

const BeforeContent = () => {
  return (
    <Wrapper
      variants={fadeInSlow}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="1"
    >
      <a className="animate-bounce cursor-pointer" href="#bio">
        <ScrollDownArrowIcon className="h-8 w-8 text-gray-700 dark:text-gray-50" />
      </a>
    </Wrapper>
  );
};

export default BeforeContent;
