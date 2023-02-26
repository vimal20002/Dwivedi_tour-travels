import React from 'react'
import logo from './images/logo.png'
import "./navbar.css"
function Navbar() {
  return (
    <>
    <div className="main-nav">
      <img src={logo} alt="dwivedi" className="logo"/>
      <div className="btn nav-home"><h5>Home</h5></div>
      <div className="btn nav-bookings"><h5>Book Cabs</h5></div>
       <div className="btn nav-cargo"><h5>Cargo</h5></div>
       <div className="btn nav-about"><h5>About</h5></div>
       <div className="btn nav-contact"><h5>Contact Us</h5></div>
        

    </div>
    </>
  )
}

export default Navbar


