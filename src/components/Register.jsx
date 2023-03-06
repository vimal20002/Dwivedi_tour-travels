import React from 'react'
import './login.css'
import jbrdstiimg from '../components/images/register.png'
const Register = () => {
  return (
    <>
      <div className="registerForm">
        <img src={jbrdstiimg} alt="regimg" />
        <input type="text" name="name" placeholder='Your Name' autoFocus id="name" />
        <input type="email" name="email" placeholder='info@example.com' autoFocus id="email" />
        <input type="password" name="password" placeholder='Password' autoFocus id="password" />
        <input type="password" name="cpassword" placeholder='Confirm Password' autoFocus id="cpassword" />
        <div className="book-btn">
          Register
        </div>
      </div>
    </>
  )
}

export default Register
