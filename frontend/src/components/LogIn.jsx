import React, { useState, useEffect } from 'react'
import'./login.css'
import profileimg from '../components/images/profile.png'
import { Link ,useHistory} from 'react-router-dom'
import { GoogleLogin } from "react-google-login"
import { gapi } from 'gapi-script';
import { useDispatch} from 'react-redux'
import { login } from '../redux/features/userSlice'
import {toast} from "react-toastify"




const LogIn = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

   const submitForm=()=>{
       const formData={
        email:email,
        password:password
       }
       console.log(formData);
       if(formData.email && formData.password){
       dispatch(login({formData, history,toast}));

       }
   }
   const onSuccess = (resp) => {
    console.log(resp)
    const nm = resp.profileObj.familyName;
    const em = resp.profileObj.email;
    console.log(nm, em);
  }
  const onFailure = (err) => {
    console.log(err)
  }
const clientId ="812307903370-tdcjgn3a0ti8uhjofajr5jtnms384753.apps.googleusercontent.com"
useEffect(() => {
  const initClient = () => {
    gapi.client.init({
      clientId: clientId,
      scope: ''
    });
  };
  // console.log(initClient)
  gapi.load('client:auth2', initClient);
});


  return (
    <>
    
     <div className="loginForm">
       <img src={profileimg} alt="profileimg" />
      <input type="email" name="email" placeholder='info@example.com' value={email} onChange={(e)=>{setEmail(e.target.value)}} autoFocus  id="email" />
      <input type="password" name="password" placeholder='password' autoFocus value={password} onChange={(e)=>{setPassword(e.target.value)}}  id="password" />
      <div className="book-btn" onClick={()=>{submitForm()}}
      

      >
        
        Log In</div>
      <p>Do not have an account ? <Link to="/register"><span className='registeropt' >Register</span></Link></p>
       <h2>OR</h2>
     <div>
     <GoogleLogin
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
     </div>
     </div>
    </>
  )
}
export default LogIn
