import React from 'react';
import Card from './Card/Card'
import data from './Card/Carddata1'

export default function Section3(){
    const cards=data.map(item=>{
        return (<Card
        key={item.id}
        cardid={item.id}
        img={item.img}
        name={item.name}
        />)
    })
    return (
        <>
        <h1>BITS Merchandize</h1>
        <div className='section3 section'>
        {cards}
        </div>
        </>
    )
}