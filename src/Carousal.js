import React,{useRef} from 'react'
import './Carousal.css'
import img1 from './assets/Carousal/Cimg1.webp'
import img2 from './assets/Carousal/Cimg2.jpg'
import img3 from './assets/Carousal/Cimg3.jpg'
import img4 from './assets/Carousal/Cimg4.jpg'
import img5 from './assets/Carousal/Cimg5.jpg'
import img6 from './assets/Carousal/Cimg6.jpg'
import img7 from './assets/Carousal/Cimg7.jpg'

const Carousal = () => {

    const ref=useRef(null);
    const scrollIt=(x,y,ele)=>{
        // ref.current.scrollLeft+=x;
        // document.querySelector(ele).scrollRight+=y;
        // document.querySelector(ele).scrollLeft+=x;
        // document.querySelector(ele).scrollRight+=y;
    }

    const scroll_It=(scrollOffSet)=>{
        ref.current.scrollRight += scrollOffSet;
        // document.querySelector(ele).scrollLeft+=x;
        // document.querySelector(ele).scrollRight+=y;
    }

  return (
    <div className='carousal-main'>

    <div className='Carousal'>

    <div className='Navigator'>
        <div className='LeftArrow' onClick={()=>scroll_It(-1300)} >
         <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
             <path d="M20 44 0 24 20 4 22.8 6.85 5.65 24 22.8 41.15Z"/>
         </svg>
        </div>
        <div className='RightArrow' onClick={()=>scroll_It(1300)}>
         <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
             <path d="M15.2 43.9 12.4 41.05 29.55 23.9 12.4 6.75 15.2 3.9 35.2 23.9Z"/>
         </svg>
        </div>
    </div>

        <img src={img1} alt=''/>
        <img src={img2} alt=''/>
        <img src={img3} alt=''/>
        <img src={img4} alt=''/>
        <img src={img5} alt=''/>
        <img src={img6} alt=''/>
        <img src={img7} alt=''/>
    </div>
    </div>
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