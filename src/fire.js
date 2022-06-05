import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCdrCFX2sjxMunIQyKosRs7erlMZwzZ0mw",
    authDomain: "su-kart.firebaseapp.com",
    projectId: "su-kart",
    storageBucket: "su-kart.appspot.com",
    messagingSenderId: "592539837806",
    appId: "1:592539837806:web:cb51f7bdf7493b3dc0cd7f"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export const db = getFirestore(fire);
  export default fire;