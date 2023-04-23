import React from 'react'
import './pricingcatalog.css'
import { useHistory } from 'react-router-dom'
const PricingCard = ({price,distance,plan,id,hour}) => {

   const history=useHistory();
    const handleClick=()=>{
        
      
           history.push(`/bookcabs/:${price}`)


    }
  return (
    <>
       <div className="card-body prc">
        <div className='patta'>
            <h4>{plan}</h4>
            <h5>₹ {price} for {hour} hours for {distance}km</h5>
            </div>
            <ul className='list'>
            <li>Experienced Drivers</li>
            <li>Well-Sanatized Vehicles</li>
            <li>24Hr Customer Support</li>
            <li>2 Water Bottels</li>
            <li>Tissue Paper</li>
            <li>Free Wi-Fi</li>
            </ul>
            <div className="line"></div>

            <div className="bookk-now"
            onClick={()=>handleClick()}
            > Continue </div>
        </div>
    </>
  )
}

export default PricingCard
