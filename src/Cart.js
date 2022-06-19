import React, { useEffect, useState } from 'react'
import {
    collection,
    query,
    onSnapshot,
    getDocs,
    deleteDoc,
    where
} from 'firebase/firestore'
import { auth, db } from "./FirebaseConfigs/firebaseConfig";
import './Section0.css'
import CartCard from './CartCard'

const Cart = () => {
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

    const [cartdata, setcartdata] = useState([]);
    if(loggeduser){
        const getcartdata = () => {
            const cartArray = [];
            getDocs(collection(db, `cart-${loggeduser[0].uid}`)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    cartArray.push({ ...doc.data(), id: doc.id })
                })
                setcartdata(cartArray)
            }).catch((error) => {
                console.log(error.message);
            })
        }
        getcartdata();
    }
    return (
        <>
        <div className='MyCart'>
        <h1>My Cart</h1>
        {cartdata!==0?
            <div className='Section0 section'>
                {cartdata.map((product) => (
                    <CartCard
                    key={product.id}
                    product={product}
                    />
                ))}
            </div>
        :<>YourCart is empty</>}
        </div>
        </>
    )
}

export default Cart