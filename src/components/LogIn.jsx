import React from 'react'
import'./login.css'
import profileimg from '../components/images/profile.png'
const LogIn = () => {
  return (
    <>
     <div className="loginForm">
       <img src={profileimg} alt="profileimg" />
      <input type="email" name="email" placeholder='info@example.com'  autoFocus  id="email" />
      <input type="password" name="password" placeholder='password' autoFocus  id="password" />
      <div className="book-btn">Log In</div>
      <p>Do not have an account ? <span className='registeropt'>Register</span></p>
       <h2>OR</h2>
     <div className="book-btn">Continue with Google</div>
     </div>
    </>
  )
}

export default LogIn
