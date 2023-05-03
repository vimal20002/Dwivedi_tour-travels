import './about.css'
import insta from './images/instagram.png';
import linkd from './images/linkedin.png'
import { useState } from 'react';
import ceo from "./images/ceo.png"
import vim from "./images/vim.jpg"
import rag from "./images/ragh.jpg"
import piyu from "./images/piyu.jpg"

const About = () => {
  const [devs,setDevs] = useState(false)
  return (
    <div className='main-about'>
      <div className="op">
        <div className={`aop ${devs?"":"act"}` } onClick={()=>{
          setDevs(!devs)
        }}>Compony</div>
        <div className={`aop ${devs?"act":""}`} onClick={()=>{
          setDevs(!devs)
        }}>Developer</div>
      </div>
     {!devs&& <div className="compony">
          <div className="user-card">
          <p>
        All what one needs to enjoy holidays with loved ones? First, is to take a break from the routine schedule and second is to plan where to go? How to go? How to manage the trip? What options are there to choose from? How to get a trip within the budget? Which destination will be suitable as per interest of my family/group? What about the accommodation facilities at selected destination? I want to experience something new in this tour but what and how?


The first step is quite easy to take but for second you need a genuine source to get information and as well to plan your trip. With innumerous tourist spots renowned across the world, it becomes really difficult for one to find the best among them. Now no more worries, as you can get all the solutions under one roof i.e. Dwivedi Tour&Travels.com, the other name for convenience in the domain of 24X7 online travel portals.
        </p>
        <div className="dt">
         <h3 className='title'><span className='s'>S</span>
         hubham Dwivedi</h3>
         <h4>Founder & CEO</h4>
         <div className="socials">
          <a href='https://instagram.com/shubham.kumar.1865?igshid=YmMyMTA2M2Y=' rel="noreferrer" target="_blank">
            <img src={insta} alt="" />
            </a>
            <a href="tel:8318891285">
            <img src={linkd} alt="" />
            </a>
         </div>
         </div>
          <img src={ceo}
           alt="elon img" />
           
         
        </div>
        </div>}
        {devs&&<div className="devs">
          <h3>Boring Strings</h3>
        <div className="imgs">
          <div className="devimg">
          <a href="https://www.linkedin.com/in/piyush-kumar-webdev">

          <img src={piyu} alt="" className="p" />
          </a>
          <h4>Piyush</h4>
          </div>
          <div className="devimg">

          <a href="https://www.linkedin.com/in/vimal-mishra9517/">
          <img src={vim} alt="" className="v" />
          </a>
          <h4>Vimal</h4>
          </div>
          <div className="devimg">

          <a href="https://www.linkedin.com/in/raghav-pandey-a39745200/">
          <img src={rag} alt="" className="r" />
          </a>
          <h4>Raghav</h4>
          </div>
        </div>
        <p>Hey ! We're a group of three friends who love to learn new technologies through building. The best way to get good at it is to do it. We have developed several projects like this earlier. You can contact us through our socials given here for any kind of tech-related work. The next project is yours. We hope to see your works and querries dropping by at our socials. Have a good-day!</p>
        </div>
       }
    </div>
  )
}

export default About