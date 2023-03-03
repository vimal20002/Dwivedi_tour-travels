import React from 'react'
import './cardelement.css'

const CardElement = ({title,imgUrl,price}) => {
  return (<>
    <div className='card-body'>
 <img src={imgUrl} alt="image1" />

        <h4 className='card-title'>{title}<br/>{price}</h4>
      <div className="book-now">Book Now</div>
    </div>
      </>
  )
}

export default CardElement
