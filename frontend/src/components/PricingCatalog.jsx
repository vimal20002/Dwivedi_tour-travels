import React from 'react'
import './pricingcatalog.css'
import PricingCard from './PricingCard'
const PricingCatalog = () => {
  const catalogData=[
      {
        "price":"800",
         "distance":"40",
         "id":"1"
      },
      {
        "price":"1600",
         "distance":"80",
         "id":"2"
      },{
        "price":"2400",
         "distance":"120",
         "id":"3"
      }     
  ]
  return (
   
    <>
      <div className="main-catalog">
        { catalogData.map((e)=>{
           return <PricingCard price={e.price}  distance={e.distance} id={e.id}   />  
         })
        }
      </div>
    </>
  )
}

export default PricingCatalog
