import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from "firebase/auth";
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
// Initialize Firebase
const app = initializeApp(firebaseConfig)

  const fire = firebase.initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);

  export const db = getFirestore(fire);
  export default fire;