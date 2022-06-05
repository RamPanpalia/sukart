import React from 'react';
import Bar from './Section1/bar1';
import data from './Section1/data1.js';

export default function section1(){
    const bar_img=data.map(item=>{
        return (
          <Bar
          key={item.id}
          img={item.img}
          />
        )
    })
    return(
        <div className="bar1">
            {bar_img}
        </div>
    )
}