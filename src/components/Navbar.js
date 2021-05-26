import React, { useState, useEffect } from "react"

import { Link } from "react-scroll"
import styled from "styled-components"

const LinkStyled = styled(Link)`
  color: #2563eb;
  cursor: pointer;
  padding: 0 0.5em;
  font-size: 1rem;
  line-height: 1.5rem;

  @media (min-width: 768px) {
    padding: 0 1em;
  }

  &.active {
    color: #1a237e !important;
    font-weight: bold;
  }
`

const MyNavbar = styled.nav`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  margin: 0;
  padding: 0.75rem 0;
  z-index: 2;
  transition: transform 350ms ease-in-out;
`

const Navigation = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 140) {
        if (!visible) {
          setVisible(true)
        }
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
  }, [visible])

  return (
    <MyNavbar
      id="navbar"
      className={
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }
    >
      <div className="h-full flex divide-x divide-gray-400 justify-center md:justify-end items-center text-center md:text-justify md:mr-6">
        <LinkStyled
          activeClass="active"
          to="bio"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          A propos
        </LinkStyled>
        <LinkStyled
          activeClass="active"
          to="competences"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          Mes compétences
        </LinkStyled>
        <LinkStyled
          activeClass="active"
          to="projets"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          Mes projets
        </LinkStyled>
      </div>
    </MyNavbar>
  )
}

export default Navigation
