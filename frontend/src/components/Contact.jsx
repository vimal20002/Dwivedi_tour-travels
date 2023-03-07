import React, { useState } from 'react'
import './contact.css'
const Contact = () => {
  const [email, setEmail] = useState("");
  const [querry, setQuerry] = useState("");
  const submitForm = ()=>{
    const formData={
      email:email,
      querry:querry,
    }
    console.log(formData)
  }
  return (
    <>
    <div className="main-contact">
        <h2>Main Office</h2>
        <p>C - 81C, Sector - 8,
Noida - 201301, UP, India</p>
<h4>Telephone</h4>
<p>8299622672</p>
<h4>Phone</h4>
<p>9517300355</p>
<h4>Email</h4>
<p>skk180509@gmial.com</p>
    </div>
    <div className="getInTouch">
        <h2>Get In Touch</h2>
        <input type="email" name="email" id="email" placeholder='info@example.com' autoFocus value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <textarea name="querry" id="qurry" cols="30" rows="4" placeholder='Write Your Query Here' autoFocus value={querry} onChange ={(e)=>{setQuerry(e.target.value)}}></textarea>
        <div className="book-btn"  onClick={()=>{submitForm()}}>Submit</div>
    </div>
    </>
  )
}

export default Contact