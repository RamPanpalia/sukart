import React, { useState, useEffect } from "react";
import {GoogleButton} from 'react-google-button'
import "./Login.css";
// import {useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth,db} from './FirebaseConfigs/firebaseConfig'
import { collection, addDoc, arrayRemove } from "firebase/firestore";

export default function login(props) {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [phonenumber,setPhonenumber]=useState("");
  const [address,setAddress]=useState("");
  const [hasAccount,setHasAccount]=useState(false);

  // const navigate= useNavigate();
  const [errorMsg,setErrorMsg]=useState("");
  const [successMsg,setSuccessMsg]=useState("");

  const handleLogin=(e)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      setSuccessMsg("Login Successful, Happy Shopping")
      setEmail('')
      setPassword('')
      setErrorMsg('')
      setTimeout(()=>{
        setSuccessMsg('');
        translatelogin();
      },2000);
    })
    .catch((error)=>{
      const errorCode=error.code;
      console.log(error.message)
      if(error.message=='Firebase: Error (auth/invalid-email).'){
        setErrorMsg('Fill all the required fields')
      }
      if(error.message=='Firebase: Error (auth/user-not-found).'){
        setErrorMsg('Email not Found')
      }
      if(error.message=='Firebase: Error (auth/wrong-password).'){
        setErrorMsg('Wrong Password')
      }
    })
  }

  const handleSubmit=(e)=>{
    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        const user=userCredential.user;
        const initialcartvalue=0;
        console.log(user);

        addDoc(collection(db,"user"),{
          username:username,
          email:email,
          phonenumber:phonenumber,
          password:password,
          cart:initialcartvalue,
          address:address,
          uid:user.uid,
        }).then(()=>{
          setSuccessMsg('New user added successfully, You will now be automatically redirected to login page.')
          setUsername('')
          setPhonenumber('')
          setEmail('')
          setPassword('')
          setErrorMsg('')
          setTimeout(()=>{
            setSuccessMsg('');
            //navigate('/login');
          },2000);
        })
      })
      .catch((error)=>{
        alert(error.message);
        if(error.message=='Firebase: Error (auth/invalid-email).'){
          setErrorMsg('Please fill all the required fields')
        }
        if(error.message=='Firebase: Error (auth/email-already-in-use).'){
          setErrorMsg('Email already exits Please use login method')
        }
        //Error (auth/email-already-in-use).
      })
      
    }
    
    const translatelogin = () => {
      var a = document.querySelector(".Login").style;
      if (a.transform === "translateY(-2000px)") {
        a.transform = "translateY(0px)";
      } else {
      a.transform = "translateY(-2000px)";
    }
  };


  return (
    <>
    {hasAccount ? (
      <>
      <div className="Login">
        <div className="part1 part">
          <div className="login">Login</div>
          <div className="whylogin">
            Get access to your Orders, Wishlist and Recommendations
          </div>
          <div className="Login-img">
            <img src="./sutt.png" alt="" />
            SuKart
          </div>
        </div>
        <div className="part2 part">
          <div className="closeLogin" onClick={translatelogin}>
            <div className="close-login-bar close-login-bar1"></div>
            <div className="close-login-bar close-login-bar2"></div>
          </div>

          {successMsg 
          &&
          <><div className="successMsg">{successMsg}</div></>
          }
          
          {errorMsg 
          &&
          <><div className="errorMsg">{errorMsg}</div></>
          }

          <div className="email">
            <input
              placeholder="Email Address"
              type="email"
              autoFocus
              required
            />
          </div>
          <div className="password">
            <input
              placeholder="Password"
              type="password"
              required
            />
          </div>
          <div className="btn-container">
            <div className="Login-btn" onClick={handleLogin}>
              Log in
            </div>
            <p className="hasAccQuery">
              Don't have an Account ?
              <span onClick={() => setHasAccount(!hasAccount)}>
                Sign up
              </span>
            </p>

            <p>
              <u>or</u>,
            </p>
            <div className="google-login">
                <GoogleButton />
            </div>
          </div>
          <div className="onlyForBITSian">
            Only for BITSians, <br />
            Login with BITS ID only
          </div>
        </div>
      </div>
      </>
    ) : (
      <>
      <div className="Login">
        <div className="part1 part">
          <div className="login">SignUp</div>
          <div className="whylogin">
            Get access to your Orders, Wishlist and Recommendations
          </div>
          <div className="Login-img">
            <img src="./sutt.png" alt="" />
            SuKart
          </div>
        </div>
        <div className="part2 part">
          <div className="closeLogin" onClick={translatelogin}>
            <div className="close-login-bar close-login-bar1"></div>
            <div className="close-login-bar close-login-bar2"></div>
          </div>

          {successMsg 
          &&
          <><div className="successMsg">{successMsg}</div></>
          }
          
          {errorMsg 
          &&
          <><div className="errorMsg">{errorMsg}</div></>
          }

          <div className="Name">
            <input
              placeholder="Name"
              type="text"
              autoFocus
              required
              onChange={(e)=>setUsername(e.target.value)}
              />
          </div>
          <div className="phonenumber">
            <input
              placeholder="Phone Number"
              type="tel"
              autoFocus
              required
              onChange={(e)=>setPhonenumber(e.target.value)}
              />
          </div>
          <div className="email">
            <input
              placeholder="Email Address"
              type="email"
              autoFocus
              required
              onChange={(e)=>setEmail(e.target.value)}
              />
          </div>
          <div className="password">
            <input
              placeholder="Password"
              type="password"
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="Address">
            <textarea
              placeholder="Address"
              type="text"
              autoFocus
              required
              onChange={(e)=>setAddress(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <div type="submit" className="Login-btn" onClick={handleSubmit}>
              Sign up
            </div>
            <p className="hasAccQuery">
              Already have an Account ?
              <span onClick={() => setHasAccount(!hasAccount)}>
                Sign in
              </span>
            </p>

            <p>
              <u>or</u>,
            </p>
            <div className="google-login">
                <GoogleButton onClick=''/>
            </div>
          </div>
          <div className="onlyForBITSian">
            Only for BITSians, <br />
            Login with BITS ID only
          </div>
        </div>
      </div>
      </>
    )}

    </>
  );
}
