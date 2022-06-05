import React from 'react';
import Card from './Card/Card'
import data from './Card/Carddata'

export default function Section2(){
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
        <h1>Daily Necessities</h1>
        <div className='section2 section'>
        {cards}
        </div>
        </>
    )
}