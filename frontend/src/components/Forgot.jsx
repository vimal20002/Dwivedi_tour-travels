import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updatePassword } from '../redux/features/userSlice';
import {toast} from "react-toastify"
const Forgot = () => {
     const [password,setPassword]=useState("");
     const [cpassword,setCpassword]=useState("");
     const [email,setEmail]=useState("");
     const dispatch=useDispatch();
     const history=useHistory();
   const handleClick=()=>{
       const formData={
         email:email,
         password:password
       }
    dispatch(updatePassword({formData,history,toast}))
   }


  return (
    <div className='loginForm'>
      <input type="email" name="email" id="email" placeholder='Give your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder='New Password' name='npassword' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <input type="password" name='cpassword' placeholder='Confirm New Password'
      value={cpassword} onChange={(e)=>setCpassword(e.target.value)}
      />
      <div className="book-btn"
       onClick={()=>{handleClick()}}
      >Submit</div>
    </div>
  )
}

export default Forgot
