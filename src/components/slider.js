import React, {useState, Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import * as CONSTANTS from '../constants/site-constants.js';
import {Caption,Item} from 'react-bootstrap'
function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
          <img style={{height:"520px"}}
          className="d-block w-100"
          src="/imgs/Dev.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Developer</h3>
          <p>Learn new things by trying differnt things</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
         style={{height:"520px"}}
          className="d-block w-100"
          src="/imgs/pic.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Learn With Me</h3>
          <p>Its more about sharing...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img  style={{height:"520px"}}

          className="d-block w-100"
          src="/imgs/Me.jpg"
          alt="Third slide"
        />

    <Carousel.Caption>
          <h3>More About me</h3>
          <p>
            Go to the Blogs and Read it ..........
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
