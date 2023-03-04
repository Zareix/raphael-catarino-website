"use client";
import styled from "styled-components";

export const Article = styled.article`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    top: auto;
    bottom: 2rem;
    width: 100%;
    height: 2px;
    background-color: #61616a;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(2rem - 8px);
    width: 20px;
    height: 20px;
    border-radius: 999vw;
    background-color: #fff;
    border: 2px solid #61616a;
  }

  .dark &::before {
    background-color: rgb(209 213 219);
  }

  .dark &::after {
    background-color: rgb(17 24 39);
    border: 2px solid rgb(209 213 219);
  }
`;
