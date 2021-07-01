import React from "react"

import styled, { keyframes } from "styled-components"

const f = keyframes`
    0%  {background-size:11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0,   11% 0   }
    10% {background-size:11% 100%,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   }
    20% {background-size:11% 100%,11% 100%,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   }
    30% {background-size:11% 100%,11% 100%,11% 100%,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   }
    40% {background-size:11% 100%,11% 100%,11% 100%,11% 100%,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   }
    50% {background-size:11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 0   ,11% 0   ,11% 0   ,11% 0   ,11% 0   }
    60% {background-size:11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 0   ,11% 0   ,11% 0   ,11% 0   }
    70% {background-size:11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 0   ,11% 0   ,11% 0   }
    80% {background-size:11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 0   ,11% 0   }
    90% {background-size:11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 0   }
    100%{background-size:11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%,11% 100%}
`

const p = keyframes`
    0%,49.99% {background-position:calc(0*100%/9) 0,calc(1*100%/9) 0,calc(2*100%/9) 0,calc(3*100%/9) 0,calc(4*100%/9) 0,calc(5*100%/9) 0,calc(6*100%/9) 0,calc(7*100%/9) 0,calc(8*100%/9) 0,calc(9*100%/9) 0} 
    50%,100% {background-position:calc(0*100%/9) 100%,calc(1*100%/9) 100%,calc(2*100%/9) 100%,calc(3*100%/9) 100%,calc(4*100%/9) 100%,calc(5*100%/9) 100%,calc(6*100%/9) 100%,calc(7*100%/9) 100%,calc(8*100%/9) 100%,calc(9*100%/9) 100%} 
`

const LoadingScreen = styled.div`
  position: fixed;
  inset: 0;
  z-index: 268;
  display: flex;
  --c: linear-gradient(#000 0 0);

  background: var(--c) calc(0 * 100% / 9) 0, var(--c) calc(1 * 100% / 9) 0,
    var(--c) calc(2 * 100% / 9) 0, var(--c) calc(3 * 100% / 9) 0,
    var(--c) calc(4 * 100% / 9) 0, var(--c) calc(5 * 100% / 9) 0,
    var(--c) calc(6 * 100% / 9) 0, var(--c) calc(7 * 100% / 9) 0,
    var(--c) calc(8 * 100% / 9) 0, var(--c) calc(9 * 100% / 9) 0 #fff;
  background-repeat: no-repeat;
  animation: ${f} 3s infinite alternate, ${p} 6s infinite linear;

  &:before {
    content: "Loading...";
    font-family: monospace;
    font-weight: bold;
    font-size: 13vmin;
    margin: auto;
    mix-blend-mode: difference;
    color: #fff;
  }
`

const Loading = () => {
  return <LoadingScreen></LoadingScreen>
}

export default Loading
