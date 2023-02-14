"use client";
import styled from "styled-components";

export const Bio = styled.div`
  h1 {
    animation-delay: 1s;
  }

  h2,
  p,
  & > div {
    animation-delay: 1.25s;
  }

  p:first-child::first-letter {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    font-size: 3.5rem;
    float: left;
    margin-right: 0.25rem;
    line-height: 1;
  }

  strong {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    font-size: 0.8rem;
    background-color: rgb(15, 23, 42);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    color: #f8fafc;
    white-space: nowrap;
  }

  .dark strong {
    color: rgb(249, 250, 251);
    background-color: rgb(15, 23, 42);
  }
`;
