import React,{useEffect,useState} from 'react'
import { 
    collection, 
    query, 
    onSnapshot, 
    getDocs, 
    QuerySnapshot
} from 'firebase/firestore'
import { db } from './FirebaseConfigs/firebaseConfig'
import './Section0.css'

const Section0 = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const getProducts=()=>{
            const productsArray=[];
            const path=`products-${("BITS MERCHANDISE")}`;
            // alert(path);
            getDocs(collection(db,path)).then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    productsArray.push({...doc.data(),id:doc.id})
                })
            });
        }
        getProducts();
    },[])
  return (
    <>
        <div>Section0</div>

    </>
  )
}

export default Section0