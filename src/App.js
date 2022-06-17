import React from 'react';
import './App.css';
import Navbar from './Navbar';
// import SignUp from './SignUp';
import Carousal from './Carousal'
import Section0 from './Section0';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Sell from './Sell';
 
export default function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      {/* <SignUp/> */}
      <Sell/>
      <Carousal/>
      <Section0/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      Work.In.Progress
    </div>
    </>
  );
}

