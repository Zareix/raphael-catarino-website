import React from "react";

import styled from "styled-components";

import ScrollDownArrowIcon from "../../images/svg/icons/scrollDownArrow.svg";

const Wrapper = styled.div`
  position: absolute;
  top: 90vh;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    top: 80vh;
  }
`;

const BeforeContent = () => {
  return (
    <Wrapper>
      <a className="animate-bounce cursor-pointer" href="#bio">
        <ScrollDownArrowIcon className="h-8 w-8 text-gray-700 dark:text-gray-50" />
      </a>
    </Wrapper>
  );
};

export default BeforeContent;
