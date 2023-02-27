import React, { useState } from 'react'
import logo from './images/logo.png'
import userimg from './images/user.png'
import arrow from './images/arrow-down.png'
import "./navbar.css"
function Navbar() {
  const [toolBar, setToolBar]  = useState(0);
  const user = {
    name:"Raghav"
  }


  const showOption = (e)=>{
    if(toolBar % 2)
    document.getElementById('user-op').style.display = "flex"
    else
    {
      document.getElementById('user-op').style.display = "none"
    }
    setToolBar(toolBar + 1);
  }
  return (
    <>
    <div className="main-nav">
      <a href="/">
      <img src={logo} alt="dwivedi" className="logo"/>
      </a>
      <div className="btn nav-home"><h5>Home</h5></div>
      <div className="btn nav-bookings"><h5>Book Cabs</h5></div>
       <div className="btn nav-cargo"><h5>Cargo</h5></div>
       <div className="btn nav-about"><h5>About</h5></div>
       <div className="btn nav-contact"><h5>Contact Us</h5></div>
    <div className="right-op">
    <div className="user">
        <img src={userimg} alt="user" className="user-img" onClick={()=>{showOption()}} />
       </div>
       <div className="user-name">
        <h5 onClick={()=>{showOption()}}>{user.name}</h5>
       </div>
    </div>
    </div>
    <div className="user-op" id='user-op'>
      <ul>
        <li>Acoount</li>
        <li>Log Out</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar


