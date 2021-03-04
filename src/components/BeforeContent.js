import React from 'react'

import styled from "styled-components"
import { AiOutlineArrowDown } from "react-icons/ai"
import { Link } from "react-scroll"

const Wrapper = styled.div`
        position : relative;
        top: -90px;
        width: 100%;
        display: grid;
        justify-content: center;
    `

const BeforeContent = () => {
    return (
        <Wrapper>
            <Link
                to="bio"
                smooth={true}
                offset={-70}
                duration={800}
                className="cursor-pointer">
                <AiOutlineArrowDown className="text-white md:text-black" size={30} />
            </Link>
        </Wrapper>
    )
}

export default BeforeContent
