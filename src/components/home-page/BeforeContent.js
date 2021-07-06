import React from "react"

import styled from "styled-components"
import { BsArrowDown } from "react-icons/bs"
import { Link } from "react-scroll"

const Wrapper = styled.div`
  position: relative;
  top: -10vh;
  width: 100%;
  height: 45px;
  display: grid;
  justify-content: center;
  z-index: 30;

  @media (max-width: 768px) {
    top: -20vh;
  }
`

const BeforeContent = () => {
  return (
    <Wrapper id="scrollDownBtn" className="animate-bounce">
      <Link
        to="scrollDownBtn"
        smooth={true}
        offset={-100}
        duration={800}
        className="cursor-pointer"
      >
        <BsArrowDown className="text-white" size={45} />
      </Link>
    </Wrapper>
  )
}

export default BeforeContent
