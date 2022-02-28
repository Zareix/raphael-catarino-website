import React from "react";

import styled, { keyframes } from "styled-components";

import { useThemeContext } from "../../utils/context/theme-context";

import SunIcon from "../../../images/svg/icons/sun.svg";
import MoonIcon from "../../../images/svg/icons/moon.svg";

const signature = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const fill = keyframes`
  to{
    fill: currentColor;
  }
`;

const popIn = keyframes`
  from {
    transform: scale(0.5);
    opacity : 0;
  }
  to {
    transform: scale(1);
    opacity : 1;
  }
`;

const Button = styled.button`
  .light-icon {
    color: rgb(156, 163, 175);
    fill: transparent;
    animation: ${fill} 500ms 500ms ease forwards;

    path {
      stroke-dasharray: 34;
      stroke-dashoffset: 34;
      animation: ${signature} 1.5s ease forwards;
      transition: none;
    }
  }

  .dark-icon {
    color: rgb(156, 163, 175);
    fill: transparent;
    animation: ${fill} 500ms 500ms ease forwards;

    path {
      stroke-dasharray: 57;
      stroke-dashoffset: 57;
      animation: ${signature} 1s ease forwards;
      transition: none;
    }
  }

  .auto-icon {
    position: relative;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100vw;
    background-color: #d1d5db;
    animation: ${popIn} 500ms ease-in forwards;

    .dark & {
      background-color: #9ca3af;

      ::after {
        background-color: #1f2937;
      }
    }

    ::after {
      content: "";
      position: absolute;
      inset: auto;
      top: 0.6rem;
      transform: translateY(-50%);
      width: 0.45rem;
      height: 0.9rem;
      border-top-right-radius: 100vw;
      border-bottom-right-radius: 100vw;
      background-color: #f8fafc;
    }
  }
`;

const LightDarkSwitch = ({ className }) => {
  const { selectedTheme, switchTheme } = useThemeContext();

  return (
    <Button onClick={switchTheme} className={className}>
      {selectedTheme === "light" ? (
        <SunIcon className="h-6 w-6 light-icon" />
      ) : selectedTheme === "dark" ? (
        <MoonIcon id="dark-icon" className="h-6 w-6 dark-icon" />
      ) : (
        <div className="flex items-center justify-center h-6 w-6">
          <div className="auto-icon" />
        </div>
      )}
    </Button>
  );
};

export default LightDarkSwitch;
