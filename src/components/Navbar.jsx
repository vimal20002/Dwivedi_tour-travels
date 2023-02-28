import React, { useState } from 'react'
import logo from './images/logo.png'
import userimg from './images/user.png'
import "./navbar.css"
import menu from './images/menu.png'
function Navbar() {
  const [toolBar, setToolBar]  = useState(0);
  const [menuBar,setMenuBar]=useState(0);
 
  const user = {
    name:"Raghav"
  }
  window.onload = function(){
    var divToHide = document.getElementById('user-op');
    document.onclick = function(e){
      if(Array.from(e.target.classList).find((element)=>{
        return element==='options'
      }) !== 'options' ){
        //element clicked wasn't the div; hide the div
        setToolBar(0);
        divToHide.style.display = 'none';
      }
    
    };
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
      <img src={menu} alt="menu" className='menu-icon' onClick={()=>{showMenuOption()}} />
      <a href="/">
      <img src={logo} alt="dwivedi" className="logo"/>
      </a>
      <div className="nav-options" id='nav-options'>
      <div className="btn nav-home"><h5>Home</h5></div>
      <div className="btn nav-bookings"><h5>Book Cabs</h5></div>
       <div className="btn nav-cargo"><h5>Cargo</h5></div>
       <div className="btn nav-about"><h5>About</h5></div>
       <div className="btn nav-contact"><h5>Contact Us</h5></div>
      </div>
     
    
    <div className="right-op" >
    <div className="user">
        <img src={userimg} alt="user" className="user-img options"  onClick={()=>{showOption()}} />
       </div>
       <div className="user-name" >
        <h5 onClick={()=>{showOption()}} className="options">{user.name}</h5>
       </div>
    </div>
    </div>
    <div className="left-options" id='left-options'>
      <div className="btn nav-home"><h5>Home</h5></div>
      <div className="btn nav-bookings"><h5>Book Cabs</h5></div>
       <div className="btn nav-cargo"><h5>Cargo</h5></div>
       <div className="btn nav-about"><h5>About</h5></div>
       <div className="btn nav-contact"><h5>Contact Us</h5></div>
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


