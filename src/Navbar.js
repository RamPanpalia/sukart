import React, {useState,useEffect} from 'react';
import Login from './Login';
import fire from './fire';
import './Navbar.css';
import logo from './sutt.png';

export default function Navbar(){

    var userrr="user"
    const translatelogin=()=>{
        const a=document.querySelector('.Login').style
        if(a.transform==="translateY(-2000px)"){
            a.transform="translateY(0px)";
        }
        else{
            a.transform="translateY(-2000px)";
        }
    }
    const loggedOutState=()=>{
        document.querySelector('.Cart').style.display="none";
        document.querySelector('.Favourites').style.display="none";
        document.querySelector('.Log-out').style.display="none";
        document.querySelector('.Log-in').style.display="block";    
    }
    const loggedInState=()=>{
        document.querySelector('.Cart').style.display="block";
        document.querySelector('.Favourites').style.display="block";
        document.querySelector('.Log-out').style.display="block";
        document.querySelector('.Log-in').style.display="none";
    }

    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [userError,setUserError]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [hasAccount,setHasAccount]=useState(false);

    const clearInputs=()=>{
        setEmail('');
        setPassword('');
    }
    const clearErrors=()=>{
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin=()=>{
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err=>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        })
        alert("Login Successfull")
        translatelogin();
        loggedInState();
    }
    const handleSignUp=()=>{
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err=>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        })
        translatelogin();
        loggedInState();
    }
                
    const handleLogout=()=>{
        fire.auth().signOut();
        alert("Ypu have logged out successfully")
        loggedOutState();
    }

    const authListener=()=>{
        fire.auth().onAuthStateChanged(user=>{
        if(user){
            clearInputs();
            setUser(user);
        }
        else{
            setUser("");
        }
    })
    }

    useEffect(()=>{
        authListener();
    },[]);

    return (
        <>
        <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />

        <div className='Navbar'>
        <div className="pageicon nav-ele">
            <div className='pi-image'>
                <img className='logo' src={logo} alt=""/>
            </div>
            <div className='head'>
                SuKart
            </div>
        </div>
        <div className='search nav-ele'>
            <input className='searchin' placeholder='🔍 | Search'/>
        </div>
        <div className="username nav-ele">Hi {userrr},</div>
        <div className="Cart nav-ele">
        <svg id="Layer_1" fill="#fff" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 111.85"><title>cart</title><path d="M4.06,8.22A4.15,4.15,0,0,1,0,4.06,4.13,4.13,0,0,1,4.06,0h6A19.12,19.12,0,0,1,20,2.6c5.44,3.45,6.41,8.38,7.8,13.94h91a4.07,4.07,0,0,1,4.06,4.06,5,5,0,0,1-.21,1.25L112.06,64.61a4,4,0,0,1-4,3.13H41.51c1.46,5.41,2.92,8.32,4.89,9.67C48.8,79,53,79.08,59.93,79h47.13a4.06,4.06,0,0,1,0,8.12H60c-8.63.1-13.94-.11-18.2-2.91s-6.66-7.91-8.95-17h0L18.94,14.46c0-.1,0-.1-.11-.21a7.26,7.26,0,0,0-3.12-4.68A10.65,10.65,0,0,0,10,8.22H4.06Zm80.32,25a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm-16.95,0a2.89,2.89,0,0,1,5.67,0V48.93a2.89,2.89,0,0,1-5.67,0V33.24Zm-16.94,0a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm41.72-8.58H30.07l9.26,34.86H105l8.64-34.86Zm2.68,67.21a10,10,0,1,1-10,10,10,10,0,0,1,10-10Zm-43.8,0a10,10,0,1,1-10,10,10,10,0,0,1,10-10Z"/></svg>
            {/* Cart */}
        </div>
        <div className="Favourites nav-ele">Favourites</div>
        <div className='Log-in nav-ele' onClick={translatelogin}>Log-in</div>
        <div className='Log-out nav-ele' onClick={handleLogout}>Log-out</div>
        <div className='closeNavbar-for-small-devices'>
            <span className="material-symbols-outlined">
                expand_more
            </span>
        </div>
        </div>
        </>
    );
}