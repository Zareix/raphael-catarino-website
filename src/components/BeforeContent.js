import React from 'react'

import styled from "styled-components"
import { BsArrowDown } from "react-icons/bs"
import { Link } from "react-scroll"

const Wrapper = styled.div`
        position : relative;
        top: -22vh;
        width: 100%;
        height: 30px;
        display: grid;
        justify-content: center;
    `

const BeforeContent = () => {
    return (
        <Wrapper className="animate-bounce">
            <Link
                to="bio"
                smooth={true}
                offset={-70}
                duration={800}
                className="cursor-pointer">
                <BsArrowDown className=" text-black" size={30} />
            </Link>
        </Wrapper>
    )
}

export default BeforeContent
