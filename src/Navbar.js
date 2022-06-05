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
        <div className="Cart nav-ele">Cart</div>
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