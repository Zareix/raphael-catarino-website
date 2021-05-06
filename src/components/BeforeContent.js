import React from "react"

import styled from "styled-components"
import { BsArrowDown } from "react-icons/bs"
import { Link } from "react-scroll"

const Wrapper = styled.div`
  position: relative;
  top: -20vh;
  width: 100%;
  height: 45px;
  display: grid;
  justify-content: center;
  z-index: 30;
`

const BeforeContent = () => {

  return (
    <Wrapper className="animate-bounce mix-blend-difference" id="scrollDownBtn">
      <Link
        to="scrollDownBtn"
        smooth={true}
        offset={-50}
        duration={800}
        className="cursor-pointer"
      >
        <BsArrowDown className="text-white" size={45} />
      </Link>
    </Wrapper>
  )
}

export default BeforeContent
