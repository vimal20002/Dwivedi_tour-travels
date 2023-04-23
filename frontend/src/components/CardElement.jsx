import React from 'react'
import './cardelement.css'
import { Link } from 'react-router-dom'


const CardElement = ({title,imgUrl,price,id}) => {
  
  return (<>
  
    <div className='card-body'>
     
 <img src={imgUrl} alt="image1" />


        <h2 className='card-title'>{title}</h2>
        <div className="payment-sec">
          <div className="pricing-sec">
          <h2>Price</h2>
          <h3> ₹{price}</h3> 
          </div>
         <Link to={`/bookcabs/:${id}`}> <div className="book-now" >
             Book Now
          </div>
          </Link>
        
        </div>
    </div>
      </>
  )
}

export default CardElement
