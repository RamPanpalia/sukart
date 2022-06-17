import React from 'react'
import { 
    collection, 
    query, 
    onSnapshot, 
    getDocs 
} from 'firebase/firestore'
import { db } from './FirebaseConfigs/firebaseConfig'
import './Section0.css'

const Section0 = (props) => {
   alert(props.producttype)
  return (
    <div>Section0</div>
  )
}

export default Section0