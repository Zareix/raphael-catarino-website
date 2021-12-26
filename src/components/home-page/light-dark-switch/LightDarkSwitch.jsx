import React from "react"

import styled, { keyframes } from "styled-components"

import { useThemeContext } from "../../utils/theme-context"

import SunIcon from "../../../images/svg/icons/sun.svg"
import MoonIcon from "../../../images/svg/icons/moon.svg"

const signature = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`
const fill = keyframes`
  to{
    fill: currentColor;
  }
`

const Button = styled.button`
  #light-icon {
    fill: transparent;
    animation: ${fill} 500ms 500ms ease forwards;

    path {
      stroke-dasharray: 34;
      stroke-dashoffset: 34;
      animation: ${signature} 1.5s ease forwards;
      transition: none;
    }
  }

  #dark-icon {
    fill: transparent;
    animation: ${fill} 500ms 500ms ease forwards;

    path {
      stroke-dasharray: 57;
      stroke-dashoffset: 57;
      animation: ${signature} 1s ease forwards;
      transition: none;
    }
  }
`

const LightDarkSwitch = ({ className }) => {
  const { selectedTheme, switchTheme } = useThemeContext()

  return (
    <Button onClick={switchTheme} className={className}>
      {selectedTheme === "light" ? (
        <SunIcon id="light-icon" className="h-6 w-6" />
      ) : (
        <MoonIcon id="dark-icon" className="h-6 w-6" />
      )}
    </Button>
  )
}

export default LightDarkSwitch
