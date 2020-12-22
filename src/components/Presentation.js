import React from "react";

import { Carousel } from "react-bootstrap";

const carouselStyles = {
    height: "90vh"
}

const imgStyles = {
    height: "90vh"
}

const Presentation = () => {
  return (
    <Carousel style={carouselStyles} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1608080969021-dd6328f897ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt="First slide"
          style={imgStyles}
        />
        <Carousel.Caption>
          <h3>Raphaël Gonçalves Catarino</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Presentation;
