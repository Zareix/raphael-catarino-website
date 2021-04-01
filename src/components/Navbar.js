import React, { useState, useEffect } from "react"

import { Link } from "react-scroll"
import { Transition } from "react-spring/renderprops"
import styled from "styled-components"

const LinkStyled = styled(Link)`
    color: #2563EB;
    cursor: pointer;
  `

const MyNavbar = styled.div`
    position: fixed;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 50px;
    margin: 0;
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
    <div style={{ position: "fixed", zIndex: 2 }}>
      <Transition
        items={visible}
        from={{ marginTop: -100 }}
        enter={{ marginTop: 0 }}
        leave={{ marginTop: -100 }}
      >
        {(visible) =>
          visible &&
          ((props) => (
            <div style={props}>
              <MyNavbar>
                <div className="h-full flex justify-center md:justify-end items-center text-center md:text-justify gap-3 md:gap-6 md:mr-6">
                  <LinkStyled
                    activeClass="active"
                    to="bio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    A propos
                  </LinkStyled>
                  <LinkStyled
                    activeClass="active"
                    to="competences"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Mes compétences
                  </LinkStyled>
                  <LinkStyled
                    activeClass="active"
                    to="projets"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Mes projets
                  </LinkStyled>
                </div>
              </MyNavbar>
            </div>
          ))
        }
      </Transition>
    </div>
  )
}

export default Navigation
