import React, { useState } from 'react'
import logo from './images/logo.png'
import userimg from './images/user.png'
import "./navbar.css"
import menu from './images/menu.png'
import  {Link} from 'react-router-dom'




function Navbar() {
  const [toolBar, setToolBar]  = useState(0);
  const [menuBar,setMenuBar]=useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = {
    name:"Raghav"
  }
    var userOp = document.getElementById('user-op');
    var leftOp = document.getElementById('left-options');
    document.onclick = function(e){
      if(Array.from(e.target.classList).find((element)=>{
        return element==='options'
      }) !== 'options' ){
        //element clicked wasn't the div; hide the div
        setToolBar(0);
        userOp.style.display = 'none';
      }
      if(Array.from(e.target.classList).find((element)=>{
        return element==='l-options'
      }) !== 'l-options' ){
        //element clicked wasn't the div; hide the div
        setMenuBar(0);
        leftOp.style.display = 'none';
      }

    };

 
  

  const showOption = (e)=>{
    if(toolBar % 2===0)
    document.getElementById('user-op').style.display = "flex"
    else
    {
      document.getElementById('user-op').style.display = "none"
    }
    setToolBar(toolBar + 1);
  }

  const showMenuOption = (e)=>{
    if(menuBar % 2===0)
    document.getElementById('left-options').style.display = "flex"
    else
    {
      document.getElementById('left-options').style.display = "none"
    }
    setMenuBar(menuBar + 1);
    console.log(document.getElementById('left-options'))
    console.log(menuBar);
  }












  return (
    <>
    <div className="main-nav">
      <img src={menu} alt="menu" className='menu-icon l-options'  onClick={()=>{showMenuOption()}} />
      <Link to="/">
      <img src={logo} alt="dwivedi" className="logo"/>
      </Link>
      <div className="nav-options" id='nav-options'>
      <div className="btn nav-home"><Link to="/"><h5>Home</h5></Link></div>
      <div className="btn nav-bookings"><Link to="/bookcabs"><h5>Book Cabs</h5></Link></div>
       <div className="btn nav-cargo"><Link to="/cargo"><h5>Cargo</h5></Link></div>
       <div className="btn nav-about"><Link to="/about"><h5>About</h5></Link></div>
       <div className="btn nav-contact"><Link to="/contact"><h5>Contact Us</h5></Link></div>
      </div>
     
    
    <div className="right-op" >
    <div className="user">
        <img src={userimg} alt="user" className="user-img options"  onClick={()=>{showOption()}} />
       </div>
       {isLoggedIn ?<div className="user-name" >
        <h5 onClick={()=>{showOption()}} className="options">{user.name}</h5>
       </div>:<h5 className='loginOp'><Link to ="/login"> Log In </Link></h5>}
    </div>
    </div>
    <div className="left-options l-options" id='left-options'>
      <div className="btn nav-home l-options"><Link to="/"><h5 className='l-options'>Home</h5></Link></div>
      <div className="btn nav-bookings l-options"><Link to="/bookcabs"><h5 className='l-options'>Book Cabs</h5></Link></div>
       <div className="btn nav-cargo l-options"><Link to="/cargo"><h5 className='l-options'>Cargo</h5></Link></div>
       <div className="btn nav-about l-options"><Link to="/about"><h5 className='l-options'>About</h5></Link></div>
       <div className="btn nav-contact l-options"><Link to="/contact"><h5 className='l-options'>Contact Us</h5></Link></div>
      </div>
    <div className="user-op options" id='user-op'>
      <ul className='options'>
        <Link to="/account">
        <li className='options'>Account</li>
        </Link>
        <li className='options'>Log Out</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar


