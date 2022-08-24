import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgCarousel2 from '../../assets/carousel2.jpg'
import imgCarousel3 from '../../assets/carousel3.jpg'
import imgCarousel4 from '../../assets/carousel4.jpg'

function DarkVariantExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= { imgCarousel3 }
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= { imgCarousel4 }
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= { imgCarousel2 }
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;