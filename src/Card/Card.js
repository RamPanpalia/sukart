import React from 'react';
import './Card.css'
// import logo from './img.jpg'

export default function Card(props){
    const [count, setCount] = React.useState(1)
    const [favBool, setBool] = React.useState(false)
    
    function add() {
        setCount(function(oldValue) {
            return oldValue + 1
        })
    }
    
    function subtract() {
        setCount(function(oldValue) {
            if(oldValue>1){
                return oldValue - 1
            }
            else{
                return oldValue
            }
        })
    }

    function toggle(){
        if(favBool===true){
            setBool(t=>false);
        }
        else{
            setBool(t=>true);
        }
    }

    return (
        <>
        <div className="Card">
            <div className="card-img">
                <img src={props.img} alt=""/>
            </div>
            <div className="number buy-opt">
                <div className="minus" onClick={subtract}>-</div>
                <div className={"count"+props.cardid}>{count}</div>
                <div className="add" onClick={add}>+</div>
            </div>
            <div className="BN buy-opt">Buy Now</div>
            <div className="ATC buy-opt">Add to Cart</div>
            <div className='Name'>

            <div className="name">{props.name}</div>
            <div className="ATF" onClick={toggle}>
                {favBool?(<><span className='red'>♥</span></>):(<>♥</>)}
            </div>
            </div>
            <div className="SD">This product is very useful, you must definitely but it.</div>
        </div>
        </>
    )
}