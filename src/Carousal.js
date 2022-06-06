import React from 'react'
import './Carousal.css'
import img1 from './assets/Carousal/Cimg1.webp'
import img2 from './assets/Carousal/Cimg2.jpg'
import img3 from './assets/Carousal/Cimg3.jpg'
import img4 from './assets/Carousal/Cimg4.jpg'
import img5 from './assets/Carousal/Cimg5.jpg'
import img6 from './assets/Carousal/Cimg6.jpg'
import img7 from './assets/Carousal/Cimg7.jpg'

const Carousal = () => {
  return (
    <>
    <div className='Navigator'>
        <div className='LeftArrow'>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M20 44 0 24 20 4 22.8 6.85 5.65 24 22.8 41.15Z"/>
        </svg>
        </div>
        <div className='RightArrow'>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M15.2 43.9 12.4 41.05 29.55 23.9 12.4 6.75 15.2 3.9 35.2 23.9Z"/>
        </svg>
        </div>
    </div>
    <div className='Carousal'>
        <img src={img1} alt=''/>
        <img src={img2} alt=''/>
        <img src={img3} alt=''/>
        <img src={img4} alt=''/>
        <img src={img5} alt=''/>
        <img src={img6} alt=''/>
        <img src={img7} alt=''/>
    </div>
    </>
  )
}

export default Carousal