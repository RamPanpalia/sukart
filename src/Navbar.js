import React, { useState, useEffect } from "react";
import Login from "./Login";
import "./Navbar.css";
import "./CartHistory.css";
import logo from "./sutt.png";
import Cart from './Cart'
import History from './History'
import profileLogo from "./assets/user-profile.svg";
import { auth, db } from "./FirebaseConfigs/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Navbar() {
    
  const translatelogin = () => {
    const a = document.querySelector(".Login").style;
    if (a.transform === "translateY(-2000px)") {
      a.transform = "translateY(0px)";
    } else {
      a.transform = "translateY(-2000px)";
    }
  };

  function GetCurrentUser() {
    const [user, setUser] = useState("");
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
      auth.onAuthStateChanged(userlogged => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, "user"),
              where("uid", "==", userlogged.uid)
            );
            console.log(q);
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({...doc.data(), id:doc.id })));
          };
          getUsers();
        } else {
          setUser(null);
        }
      });
    }, []);
    return user
  }

  const loggeduser = GetCurrentUser();

  const [profileimg, setProfileImg] = useState(null);

  const handleLogout=()=>{
      auth.signOut().then(()=>{
          translatelogin();
      })
  }

  const displayProfile=()=>{
    if(loggeduser){
      if(document.querySelector('.Profile').style.display!=="none"){
        document.querySelector('.Profile').style.display="none";
      }
      else{
        document.querySelector('.Profile').style.display="block";
      }
    }
    else{
      (alert("Please Login to view profile details"))
    }
  }

  const toggleHistory=()=>{
    if(loggeduser){
      if(document.querySelector('.historyy').style.display!=="none"){
        document.querySelector('.historyy').style.display="none"
      }
      else{
        document.querySelector('.historyy').style.display="block"
      }
    }
  }
  const toggleCart=()=>{
    if(loggeduser){
      if(document.querySelector('.cartt').style.display!=="none"){
        document.querySelector('.cartt').style.display="none"
      }
      else{
        document.querySelector('.cartt').style.display="block"
      }
    }
  }

  return (
    <>
      <Login />

      <div className="Navbar">
        <div className="pageicon nav-ele">
          <div className="pi-image">
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="head">SuKart</div>
        </div>

        <div className="username nav-ele" tittle="View Profile">
          <img src={profileimg ? profileimg : profileLogo} onClick={displayProfile} alt="" />
          <span>Hi {loggeduser?loggeduser[0].username:"user"},</span>
        </div>
        {loggeduser?
        <>
        <div className="Cart nav-ele" onClick={toggleCart}>
          <svg
            id="Layer_1"
            fill="#fff"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 111.85"
          >
            <title>cart</title>
            <path d="M4.06,8.22A4.15,4.15,0,0,1,0,4.06,4.13,4.13,0,0,1,4.06,0h6A19.12,19.12,0,0,1,20,2.6c5.44,3.45,6.41,8.38,7.8,13.94h91a4.07,4.07,0,0,1,4.06,4.06,5,5,0,0,1-.21,1.25L112.06,64.61a4,4,0,0,1-4,3.13H41.51c1.46,5.41,2.92,8.32,4.89,9.67C48.8,79,53,79.08,59.93,79h47.13a4.06,4.06,0,0,1,0,8.12H60c-8.63.1-13.94-.11-18.2-2.91s-6.66-7.91-8.95-17h0L18.94,14.46c0-.1,0-.1-.11-.21a7.26,7.26,0,0,0-3.12-4.68A10.65,10.65,0,0,0,10,8.22H4.06Zm80.32,25a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm-16.95,0a2.89,2.89,0,0,1,5.67,0V48.93a2.89,2.89,0,0,1-5.67,0V33.24Zm-16.94,0a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm41.72-8.58H30.07l9.26,34.86H105l8.64-34.86Zm2.68,67.21a10,10,0,1,1-10,10,10,10,0,0,1,10-10Zm-43.8,0a10,10,0,1,1-10,10,10,10,0,0,1,10-10Z" />
          </svg>
          {loggeduser[0].cart}
        </div>
        </>:<></>
        }
        {loggeduser?
        <div className="Favourites nav-ele">Favourites</div>:<></>}
        {loggeduser?
        <div className="Log-out nav-ele" onClick={handleLogout}>
          Log-out
        </div>
        :
        <div className="Log-in nav-ele" onClick={translatelogin}>
          Log-in
        </div>
        }
        <div className="closeNavbar-for-small-devices">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </div>
      <div className="Profile">
        {loggeduser?
        <>
        <div className="Prof-title">Profile</div>
        <div className="profile-inside">
        <div className="profile-ele">
          <div className="profile-ele-tittle">Name: </div>
          <div className="profile-ele-value"> {loggeduser[0].username}</div>
        </div>
        <div className="profile-ele">
          <div className="profile-ele-tittle">Email: </div>
          <div className="profile-ele-value"> {loggeduser[0].email}</div>
        </div>
        <div className="profile-ele">
          <div className="profile-ele-tittle">Phone Number: </div>
          <div className="profile-ele-value"> {loggeduser[0].phonenumber}</div>
        </div>
        <div className="profile-ele">
          <div className="profile-ele-tittle">Address: </div>
          <div className="profile-ele-value"> {loggeduser[0].address}</div>
        </div>
        <div className="profile-ele">
          <div className="profile-ele-tittle">Balance: </div>
          <div className="profile-ele-value"> Rs. {loggeduser[0].balance}</div>
        </div>
        <div className="profile-ele">
          <div className="Log-out nav-ele prof-ele-btn" onClick={handleLogout}>
            Log-out
          </div>
          <div className="history nav-ele prof-ele-btn" onClick={toggleHistory}>
            History
          </div>
        </div>
        </div>
        </>
        :<></>}
      </div>
      <div className="CartHistory">
        <div className='cartt'>
          <Cart/>
        </div>
        <div className='historyy'>
          <History/>
        </div>
      </div>
    </>
    );
  }
  