import React, { useState } from 'react'
import'./login.css'
import profileimg from '../components/images/profile.png'
import { Link } from 'react-router-dom'
const LogIn = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

   const submitForm=()=>{
       const formData={
        email:email,
        password:password
       }
       console.log(formData);
   }




  return (
    <>
     <div className="loginForm">
       <img src={profileimg} alt="profileimg" />
      <input type="email" name="email" placeholder='info@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}} autoFocus  id="email" />
      <input type="password" name="password" placeholder='password' autoFocus value={password} onChange={(e)=>{setPassword(e.target.value)}}  id="password" />
      <div className="book-btn" onClick={()=>{submitForm()}}>Log In</div>
      <p>Do not have an account ? <Link to="/register"><span className='registeropt' >Register</span></Link></p>
       <h2>OR</h2>
     <div className="book-btn">Continue with Google</div>
     </div>
    </>
  )
}
export default LogIn
