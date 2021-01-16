import React, { useState, useEffect } from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Transition } from "react-spring/renderprops";

const navStyles = {
  position: "fixed",
  backgroundColor: `rgba(255, 255, 255, 0.7)`,
  width: "100%",
  margin: "0",
  zIndex : 2
};

const linkStyles = {
  color: "#303F9F",
};

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {};
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 140) {
      if (!visible) {
        setVisible(true);
      }
    } else {
      setVisible(false);
    }
  };

  return (
    <div style={navStyles}>
      <Transition
        items={visible}
        from={{ marginTop: -100 }}
        enter={{ marginTop: 0 }}
        leave={{ marginTop: -100 }}
      >
        {visible => visible && (props => 
          <div style={props}>
            <Navbar >  
              <Navbar.Collapse className="justify-content-end">
                <Nav>
                  <Nav.Link style={linkStyles} href="#bio">A propos</Nav.Link>
                  <Nav.Link style={linkStyles}>Mes projets</Nav.Link>
                  <Nav.Link style={linkStyles}>Mes compétences</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        )}
      </Transition>
      </div>
  );
};

export default Navigation;
