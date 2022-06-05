import React from 'react';
// import {GoogleLogin,GoogleLogout} from 'react-google-login'
// import GoogleButton from 'react-google-button'
import './Login.css'

export default function login(props){

    function translatelogin(){
        var a=document.querySelector('.Login').style
        if(a.transform==="translateY(-2000px)"){
            a.transform="translateY(0px)";
        }
        else{
            a.transform="translateY(-2000px)";
        }
    }

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    }=props;
    return (
        <>
        <div className='Login'>
            <div className='part1 part'>
                <div className='login'>Login</div>
                <div className='whylogin'>Get access to your Orders, Wishlist and Recommendations</div>
                <div className='Login-img'>
                    <img src='./sutt.png' alt=''/>
                    SuKart
                </div>
            </div>
            <div className='part2 part'>
                <div className='closeLogin' onClick={translatelogin}>
                    <div className='close-login-bar close-login-bar1'></div>
                    <div className='close-login-bar close-login-bar2'></div>
                </div>
                <div className='email'>
                    <input
                    placeholder='Name'
                    type='text'
                    autoFocus
                    required
                    />
                    <input 
                     placeholder='Email Address'
                     type='text'
                     autoFocus
                     required
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                    />
                    <p className='errMsg'>{emailError}</p>
                </div>
                <div className='password'>
                    <input 
                     placeholder='Password' 
                     type="password"
                     required
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                    />
                    <p className='errMsg'>{passwordError}</p>
                </div>
                <div className='btn-container'>
                    {hasAccount?(
                    <>
                    <div className='Login-btn' onClick={handleLogin}>Sign in</div>
                    <p className='hasAccQuery'>Don't have an Account ?
                        <span onClick={()=>setHasAccount(!hasAccount)}> Sign up</span>
                    </p>
                    </>
                    ):(
                    <>
                    <div className='Login-btn' onClick={handleSignUp}>Sign up</div>
                    <p className='hasAccQuery'>Already have an Account ?
                        <span onClick={()=>setHasAccount(!hasAccount)}> Sign in</span>
                    </p>
                    </>
                    )}
                    <p><u>or</u></p>
                    {/* <GoogleLogin></GoogleLogin> */}
                    <div className='Login-btn google-login'>Login with Google</div>
                </div>
                <div className='onlyForBITSian'>Only for BITSians, <br/>Login with BITS ID only</div>
            </div>
        </div>
        </>
    )
}