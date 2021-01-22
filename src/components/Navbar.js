import React, { useState, useEffect } from "react"

import { Navbar, Nav } from "react-bootstrap"
import { Transition } from "react-spring/renderprops"

const navStyles = {
  position: "fixed",
  backgroundColor: `rgba(255, 255, 255, 0.7)`,
  width: "100%",
  height: "50px",
  margin: "0",
}

const linkStyles = {
  color: "#303F9F",
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
                <div  className="flex flex-row-reverse mr-3">
                  <a style={linkStyles} href="#bio">
                    A propos
                  </a>
                  <a style={linkStyles}>Mes projets</a>
                  <a style={linkStyles}>Mes compétences</a>
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
