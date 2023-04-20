import React, { useState } from 'react'
import './pricingcatalog.css'
import { useHistory, useParams } from 'react-router-dom'
const PricingCard = ({price,distance,plan,id}) => {

   const history=useHistory();
    const handleClick=()=>{
        
      
           history.push(`/bookcabs/:${price}`)


    }
  return (
    <>
       <div className="plan-2">
            <h3>{plan}</h3>
            <h5>₹ {price} for 8 hours for {distance}km</h5>
            <div className="line"></div>
            <li>Experienced Drivers</li>
            <li>Well-Sanatized Vehicles</li>
            <li>24Hr Customer Support</li>
            <div className="line"></div>

            <div className="bookk-now"
            onClick={()=>handleClick()}
            > Continue </div>
        </div>
    </>
  )
}

export default PricingCard
