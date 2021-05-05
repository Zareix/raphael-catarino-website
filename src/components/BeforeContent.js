import React from "react"

import styled from "styled-components"
import { BsArrowDown } from "react-icons/bs"
import { Link } from "react-scroll"

const Wrapper = styled.div`
  position: relative;
  top: -10vh;
  width: 100%;
  height: 30px;
  display: grid;
  justify-content: center;
  z-index: 30;
`

const BeforeContent = () => {
  return (
    <Wrapper className="animate-bounce">
      <Link
        to="bio"
        smooth={true}
        offset={-120}
        duration={800}
        className="cursor-pointer"
      >
        <BsArrowDown className="text-white" size={40} />
      </Link>
    </Wrapper>
  )
}

export default BeforeContent
