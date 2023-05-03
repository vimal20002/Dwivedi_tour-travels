import React from 'react'
import './cardelement.css'
import { Link } from 'react-router-dom'
import linkd from './images/linkedin.png'


const CardElement = ({title,imgUrl,price,id}) => {
  
  return (<>
  
    <div className='card-body'>
     
 <img src={imgUrl} alt="image1" />


        <h2 className='card-title'>{title}</h2>
        <div className="payment-sec">
          <div className="pricing-sec">
            <a href="tel:8318891285">
          <img src={linkd} alt="phone" id='ph'/>
          </a>
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
