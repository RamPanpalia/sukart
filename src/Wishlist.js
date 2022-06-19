import React, { useEffect, useState } from 'react'
import {
    collection,
    query,
    onSnapshot,
    getDocs,
    where
} from 'firebase/firestore'
import { auth, db } from "./FirebaseConfigs/firebaseConfig";
import './Section0.css'
import Card2 from './Card2'

const Wishlist = () => {
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
    const [products, setProducts] = useState([]);
    if(loggeduser){
        const getProducts = () => {
            const productsArray = [];
            const path = `favourites-${loggeduser[0].uid}`;
            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id })
                })
                setProducts(productsArray)
            }).catch((error) => {
                console.log(error.message);
            })
        }
        getProducts();
    }
    return (
        <div className='MyWishlist'>
            <h1>Wishlist</h1>
            <div className='Section0 section'>
                {products.map((product) => (
                    <Card2
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default Wishlist