import React,{useState,useEffect} from 'react';
import './Card.css'
// import logo from './img.jpg'
import {auth,db} from '../FirebaseConfigs/firebaseConfig'
import { collection, addDoc, arrayRemove, getDocs, query, where  } from "firebase/firestore";

export default function Card(props){
    const [count, setCount] = React.useState(1)
    const [isFav, setBool] = React.useState(false)

    function GetCurrentUser() {
        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "users");
        useEffect(() => {
          auth.onAuthStateChanged(userlogged => {
            if (userlogged) {
              const getUsers = async () => {
                const q = query(
                  collection(db, "user"),
                  where("uid", "==", userlogged.uid)
                );
                console.log(q);
                const data = await getDocs(q);
                setUser(data.docs.map((doc) => ({...doc.data(), id:doc.id })));
              };
              getUsers();
            } else {
              setUser(null);
            }
          });
        }, []);
        return user
      }
      const loggeduser = GetCurrentUser();

    //we will send all the data onClick to firebase and later populate it on the buy history or add to cart page
    //we will also add and remove products from favourites
    function buyIt(){}
    const addToCart=()=>{
        if(loggeduser){}
    }
    function toggleFav(){}
    
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
        if(isFav===true){
            setBool(t=>false);
            toggleFav();
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
            <div className="BN buy-opt" onClick={buyIt}>Buy Now</div>
            <div className="ATC buy-opt" onclick={addToCart}>Add to Cart</div>
            <div className='Name'>

            <div className="name">{props.name}</div>
            <div className="ATF" onClick={toggle}>
                {isFav?(<><span className='red'>♥</span></>):(<>♥</>)}
            </div>
            </div>
            <div className="SD">This product is very useful, you must definitely buy it.</div>
        </div>
        </>
    )
}