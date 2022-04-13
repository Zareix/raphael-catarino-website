import React, { useContext } from "react";

import styled, { keyframes } from "styled-components";

import CmsDataContext from "../utils/context/data-context";

const LoadingSection = styled.div`
  z-index: 10000;
  position: fixed;
  height: 100vh;
  width: 100vw;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const loadingAnim = keyframes`
  0%{
    transform : rotate(0deg);
  }
  100%{
    transform : rotate(360deg);
  }
`;

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
    z-index: 10200;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 10150;
    inset: 5px;
    background-color: rgba(249, 250, 251);
    border-radius: 14px;

    .dark & {
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
    animation: ${loadingAnim} infinite 2.5s;

    .dark & {
      background-color: rgba(249, 250, 251);
    }
  }
`;

const Loading = () => {
  const { loading } = useContext(CmsDataContext);

  return (
    <LoadingSection className="bg-gray-50 dark:bg-gray-900">
      <LoadingAnimation>
        <span>{loading.text}</span>
      </LoadingAnimation>
    </LoadingSection>
  );
};

export default Loading;
