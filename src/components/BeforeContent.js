import React from 'react'

import styled, { keyframes } from "styled-components"
import { AiOutlineArrowDown } from "react-icons/ai"
import { Link } from "react-scroll"
import bounce from 'react-animations/lib/bounce'

const bounceAnim = keyframes`${bounce}`

const Wrapper = styled.div`
        position : relative;
        top: -22vh;
        width: 100%;
        height: 30px;
        display: grid;
        justify-content: center;
        animation: ${bounceAnim}, ${bounceAnim}, ${bounceAnim}, ${bounceAnim};
        animation-delay : 1s, ${1+(2+5)*1}s, ${1+(2+5)*2}s, ${1+(2+5)*3}s;
        animation-duration : 2s;
        @media (max-width: 1280px){
            top : -15vh;
        }
        @media (max-width: 768px){
            top : 0vh;
        }
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
                <AiOutlineArrowDown className=" text-black" size={30} />
            </Link>
        </Wrapper>
    )
}

export default BeforeContent
