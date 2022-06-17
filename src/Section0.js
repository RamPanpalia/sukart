import React, { useEffect, useState } from 'react'
import {
    collection,
    query,
    onSnapshot,
    getDocs,
} from 'firebase/firestore'
import { db } from './FirebaseConfigs/firebaseConfig'
import './Section0.css'
import Card2 from './Card2'

const Section0 = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = () => {
            const productsArray = [];
            const path = `product-BITS MERCHANDISE`;
            // alert(path);
            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id })
                    console.log(doc.id, "=>", doc.data())
                })
                setProducts(productsArray)
            }).catch((error) => {
                console.log(error.message);
            })
        }
        getProducts();
    }, [])
    return (
        <>
            <div>BITS Merchandise</div>
            <div className='Section0'>
                {products.map((product) => (
                    <Card2
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    )
}

export default Section0