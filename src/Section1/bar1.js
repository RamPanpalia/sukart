import "./bar1.css";
import React from 'react';


export default function bar1(props){
    return (
        <div className="bar1-ele">
        <img className="bar1-img" src={props.img} alt=""/>
        </div>
    );
}