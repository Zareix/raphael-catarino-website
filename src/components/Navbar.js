import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const linkStyles = {
    color: "#303F9F",
};

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link style={linkStyles}>A propos</Nav.Link>
          <Nav.Link style={linkStyles}>Mes projets</Nav.Link>
          <Nav.Link style={linkStyles}>Mes compétences</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
