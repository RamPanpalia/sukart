import React from 'react';
import Card from './Card/Card'
import data from './Card/Carddata2'

export default function Section4(){
    const cards=data.map(item=>{
        return (<Card
        key={item.id}
        cardid={item.id}
        img={item.image}
        name={item.title}
        
        />)
    })
    return (
        <>
        <h1>Cloth in Style</h1>
        <div className='section4 section'>
        {cards}
        </div>
        </>
    )
}