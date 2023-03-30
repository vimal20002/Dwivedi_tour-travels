import React, { useState } from 'react'
import './login.css'
import jbrdstiimg from '../components/images/register.png'
import { register } from '../redux/features/userSlice'
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {toast} from "react-toastify"


const Register = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const[cpassword,setCpassword]=useState("");
   const dispatch=useDispatch();
   const history=useHistory();
  const submitForm=()=>{
     
    const formData={
      name:name,
      email:email,
      password:password,
      cpassword:cpassword
    }

      if(cpassword===password){
        console.log(formData)
        dispatch(register({formData,history,toast}))
      }
      else{
       toast.error("Passwords Do Not Match")
       
      }
  }




  return (
    <>
      <div className="registerForm">
        <img src={jbrdstiimg} alt="regimg" />
        <input type="text" name="name" required placeholder='Your Name' autoFocus value={name} onChange={(e)=>{setName(e.target.value)}} id="name" />
        <input type="email" name="email"  required placeholder='info@example.com' autoFocus value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" />
        <input type="password" name="password" required placeholder='Password' autoFocus id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <input type="password" name="cpassword"  required placeholder='Confirm Password' autoFocus id="cpassword" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} />
        <div className="book-btn" onClick={()=>{submitForm()}}>
          Register
        </div>
      </div>
    </>
  )
}

export default Register
