import React,{useRef} from 'react'
import './Carousal.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import img1 from './assets/Carousal/Cimg1.webp'
import img2 from './assets/Carousal/Cimg2.jpg'
import img3 from './assets/Carousal/Cimg3.jpg'
import img4 from './assets/Carousal/Cimg4.jpg'
import img5 from './assets/Carousal/Cimg5.jpg'
import img6 from './assets/Carousal/Cimg6.jpg'
import img7 from './assets/Carousal/Cimg7.jpg'

const Carousal = () => {

  return (        
  <Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={img4}
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>Buy Gadgets</h3>
            <p>Upto 60% off on all gadgets</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Buy Apple Products</h3>
            <p>The Biggest Sale</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3></h3>
            <p></p>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
        <img
            className="d-block w-100"
            src={img4}
            alt="Fourth slide"
        />

        <Carousel.Caption>
            <h3>Black Friday Sale</h3>
            <p>All Gadgets 60% off</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={img5}
            alt="Fourth slide"
        />

        <Carousel.Caption>
            <h3>Black Friday Sale</h3>
            <p>All Gadgets 60% off</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={img6}
            alt="Fourth slide"
        />

        <Carousel.Caption>
            <h3>Black Friday Sale</h3>
            <p>All Gadgets 60% off</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={img7}
            alt="Fourth slide"
        />

        <Carousel.Caption>
            <h3>Black Friday Sale</h3>
            <p>All Gadgets 60% off</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
  )
}

export default Carousal

/*
From sandbox needs to be updated

import * as React from "react";
import { render } from "react-dom";
import photos from "./photos";
import Styled from "./styles";

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

function App() {
  const contentWrapper = React.useRef(null);

  return (
    <Styled.Container>
      <Styled.Title>Horizontal Scroll Buttons</Styled.Title>
      <Styled.ContentWrapper ref={contentWrapper}>
        {photos.map((url, i) => (
          <Styled.Content url={url} key={`img-${i}`} />
        ))}
      </Styled.ContentWrapper>

      <Styled.ButtonWrapper>
        <Styled.Button
          onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, -10);
          }}
        >
          Left
        </Styled.Button>
        <Styled.Button
          onClick={() => {
            sideScroll(contentWrapper.current, 25, 100, 10);
          }}
        >
          Right
        </Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

*/