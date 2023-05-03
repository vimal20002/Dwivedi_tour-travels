import React from 'react'
import './pricingcatalog.css'
import { useHistory } from 'react-router-dom'
const PricingCard = ({flag,car,price,extra,distance,plan,id,hour,show}) => {

   const history=useHistory();
    const handleClick=()=>{
        
      localStorage.setItem("plan",JSON.stringify({
        price:price,
        car:car,
        distance:distance,
        plan:plan,
        hour:hour,
        id:id,
        extra:extra
      }))
           history.push(`/bookcabs/:${price}`)


    }
  return (
    <>
       {show&&<div className="card-body prc">
        <div className='patta'>
            <h4>{plan}</h4>
            <h5>{car}</h5>
            <h5>₹ {price} for {hour} hours for {distance}km</h5>
            </div>
            <ul className='list'>
            <li>Experienced Drivers</li>
            <li>Well-Sanatized Vehicles</li>
            <li>24Hr Customer Support</li>
            <li>2 Water Bottels</li>
            <li>Tissue Paper</li>
            <li>Free Wi-Fi</li>
              <li><b>Overtime  charge(₹ 120)</b></li>
              <li>₹ {extra} for extra kilometers</li>
            </ul>
            <div className="line"></div>

           {flag&& <div className="bookk-now"
            onClick={()=>handleClick()}
            > Continue </div>
        }
        </div>}
    </>
  )
}

export default PricingCard
