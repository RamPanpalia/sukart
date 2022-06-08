import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='SignUp'>
        <h1>SignUp</h1>
        <input className='create-acc-ele' placeholder='Name'/>
        <input className='create-acc-ele' placeholder='Mobile Number'/>
        <input className='create-acc-ele' placeholder='Enter Your Email'/>
        <input className='create-acc-ele' placeholder='Enter Your Password'/>
        <textarea className='create-acc-ele' placeholder='Address'></textarea>
    </div>
  )
}

export default SignUp