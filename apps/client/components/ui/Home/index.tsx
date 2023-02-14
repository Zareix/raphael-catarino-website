"use client";
import styled, { keyframes } from "styled-components";

const targetScale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const SectionTitle = styled.h1`
  text-align: center;

  section:target & {
    animation: ${targetScale} 750ms 750ms;
  }
`;

export const SectionSubtitle = styled.h2.attrs({
  className: "text-gray-700 dark:text-gray-400",
})`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 400;
`;
