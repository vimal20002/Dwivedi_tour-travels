import React, { useState } from 'react'

import {toast} from "react-toastify"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { confirmOtp, genOtp } from '../redux/features/userSlice';
const GetEmail = () => {

   const [email,setEmail]=useState("");
   const [otp,setOtp]=useState("");
    const dispatch=useDispatch();
    const history=useHistory();
   const getOtp=()=>{
     const formData={
        email:email
     }
  dispatch(genOtp({formData,toast}))
   }
   const verifyOtp=()=>{
       const formData={
           email:email,
           otp:otp
       }
       dispatch(confirmOtp({formData,history,toast}))
   }



  return (
    <div className='loginForm'>
        <h4>Enter Your Email !</h4>
      <input type="email" name="email" id="useremail" placeholder='info@example.com'
        value={email} onChange={(e)=>{setEmail(e.target.value)}}
      />
      <div className="book-btn"
       onClick={()=>{getOtp()}}
      >Get Otp</div>
      <input type="text" name="otp" placeholder='Enter Your OTP'
         value={otp} onChange={(e)=>{setOtp(e.target.value)}}
      />
      <div className="book-btn"
       onClick={()=>{verifyOtp()}}
      >Verify</div>
    </div>
  )
}

export default GetEmail
