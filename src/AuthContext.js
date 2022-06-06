import { 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut,
    signInWithRedirect,
    onAuthStateChanged 
} from "firebase/auth";
import React, { useContext, createContext } from "react";
import { auth } from "./fire";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const googleSignIn=()=>{
        const provider=new GoogleAuthProvider();
        signInWithPopup(auth,provider);
    }

  return( 
    <AuthContext.Provider value={{googleSignIn}}>
            {children}
    </AuthContext.Provider>
    )
};
export const UserAuth=()=>{
    return useContext(AuthContext);
}
