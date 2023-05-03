import React, { useState } from 'react'
import './contact.css'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {toast} from "react-toastify"

import { sendQuerry } from '../redux/features/userSlice';
const Contact = () => {
  const [email, setEmail] = useState("");
  const [querry, setQuerry] = useState("");
  const history=useHistory();
  const dispatch=useDispatch();
  const submitForm = ()=>{
    if(email&&querry){
    const formData={
      email:email,
      querry:querry,
    }
    dispatch(sendQuerry({formData,history,toast}))
  }
  else{
    toast.error("Please fill details")
  }
  }
  return (
    <>
    <div className="mnc">
    <div className="main-contact">
        <h2>Main Office</h2>
        <p>1045, Nearby Rotary Public School, Sector-22, Gurugram,
Gurugram, Haryana, 122015</p>

<h4>Phone</h4>
<p>8318891285</p>
<h4>Email</h4>
<p>dwiveditourstravelsofficials@gmail.com</p>
    </div>
    <div className="getInTouch">
        <h2>Get In Touch</h2>
        <input type="email" name="email" id="email" placeholder='info@example.com'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <textarea name="querry" id="qurry" cols="30" rows="4" placeholder='Write Your Query Here'  value={querry} onChange ={(e)=>{setQuerry(e.target.value)}}></textarea>
        <div className="book-btn"  onClick={()=>{submitForm()}}>Submit</div>
    </div>
    </div>
    </>
  )
}

export default Contact