import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdrCFX2sjxMunIQyKosRs7erlMZwzZ0mw",
  authDomain: "su-kart.firebaseapp.com",
  databaseURL: "https://su-kart-default-rtdb.firebaseio.com",
  projectId: "su-kart",
  storageBucket: "su-kart.appspot.com",
  messagingSenderId: "592539837806",
  appId: "1:592539837806:web:cb51f7bdf7493b3dc0cd7f"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const storage=getStorage(app);
export const db=getFirestore(app);