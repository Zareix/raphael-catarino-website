import React, { useState, useEffect } from "react"

import { Link } from "react-scroll"
import { Transition } from "react-spring/renderprops"

const navStyles = {
  position: "fixed",
  backgroundColor: `rgba(255, 255, 255, 0.7)`,
  width: "100%",
  height: "50px",
  margin: "0",
}

const linkStyles = {
  color: "#2563EB",
  margin: "10px",
  height: "100%",
}

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
    return () => {}
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
              <div style={navStyles}>
                <div className="flex justify-center md:justify-end md:mr-3">
                  <Link
                    style={linkStyles}
                    activeClass="active"
                    to="bio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                  >
                    A propos
                  </Link>
                  <Link
                    style={linkStyles}
                    activeClass="active"
                    to="competences"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Mes compétences
                  </Link>
                  <Link
                    style={linkStyles}
                    activeClass="active"
                    to="projets"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Mes projets
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </Transition>
    </div>
  )
}

export default Navigation
