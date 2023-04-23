import { Link } from 'react-router-dom';
import './about.css'
import insta from './images/instagram.png';
import linkd from './images/linkedin.png'
import { useState } from 'react';
import ceo from "./images/ceo.png"

const About = () => {
  const [devs,setDevs] = useState(true)
  return (
    <div className='main-about'>
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
          <a href='https://www.google.com/' target="_blank">
            <img src={insta} alt="" />
            </a>
            <a href='https://www.google.com/' target="_blank">
            <img src={linkd} alt="" />
            </a>
         </div>
         </div>
          <img src={ceo}
           alt="elon img" />
           
         
        </div>
        </div>}
        {devs&&<div className="devs">
        <div className="dev-card">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam porro tenetur, inventore omnis tempore suscipit, quam hic et illo voluptatem! Odit a dolorum quisquam vel excepturi sunt dolorem? Ut?
        Quaerat repudiandae amet eius optio autem explicabo natus reiciendis assumenda, recusandae facere molestias ut provident, tempore nihil nulla porro at qui perferendis! Id nobis consequatur in magni culpa totam dolore.
        Asperiores magnam itaque eaque error quaerat eius pariatur corrupti labore vero voluptatibus assumenda et voluptatum accusantium quos, possimus repudiandae debitis dolore aliquam? Quia incidunt aspernatur dolorum est nulla, porro explicabo!
        </p>
        <div className="dt">
        <h3><span className='s'>V</span>imal Mishra</h3>  
        <h4>Developer</h4>
        <div className="socials">
          <a href='https://www.google.com/' target="_blank">
            <img src={insta} alt="" />
            </a>
            <a href='https://www.google.com/' target="_blank">
            <img src={linkd} alt="" />
            </a>
         </div>
         </div>
       
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png" alt="" />
        </div>
        <div className="dev-card">
        <p>Hey! Raghav
        </p>
        <div className="dt">
        <h3><span className='s'>R</span>aghav Pandey</h3>  
        <h4>Developer</h4>
        <div className="socials">
          <a href='https://www.google.com/' target="_blank">
            <img src={insta} alt="" />
            </a>
            <a href='https://www.google.com/' target="_blank">
            <img src={linkd} alt="" />
            </a>
         </div>
         </div>
       
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png" alt="" />
        </div>
        <div className="dev-card">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam porro tenetur, inventore omnis tempore suscipit, quam hic et illo voluptatem! Odit a dolorum quisquam vel excepturi sunt dolorem? Ut?
        Quaerat repudiandae amet eius optio autem explicabo natus reiciendis assumenda, recusandae facere molestias ut provident, tempore nihil nulla porro at qui perferendis! Id nobis consequatur in magni culpa totam dolore.
        Asperiores magnam itaque eaque error quaerat eius pariatur corrupti labore vero voluptatibus assumenda et voluptatum accusantium quos, possimus repudiandae debitis dolore aliquam? Quia incidunt aspernatur dolorum est nulla, porro explicabo!
        </p>
        <div className="dt">
        <h3><span className='s'>P</span>iyush</h3>  
        <h4>Developer</h4>
        <div className="socials">
          <a href='https://www.google.com/' target="_blank">
            <img src={insta} alt="" />
            </a>
            <a href='https://www.google.com/' target="_blank">
            <img src={linkd} alt="" />
            </a>
         </div>
         </div>
       
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png" alt="" />
        </div>
        </div>
       }
    </div>
  )
}

export default About