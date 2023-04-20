import React from 'react'
import './pricingcatalog.css'
import PricingCard from './PricingCard'
const PricingCatalog = () => {
  const catalogData=[
      {
        "price":"800",
        "plan":"Basic Plan 8Hr",
         "distance":"40",
         "id":"1"
      },
      {
        "price":"1600",
        "plan":"Pro Plan 8Hr",
         "distance":"80",
         "id":"2"
      },{
        "price":"2400",
        "plan":"Advance Plan 8Hr",
         "distance":"120",
         "id":"3"
      }     
  ]
  return (
   
    <>
      <div className="main-catalog">
        { catalogData.map((e)=>{
           return <PricingCard price={e.price}  distance={e.distance} plan={e.plan} id={e.id}   />  
         })
        }
      </div>
    </>
  )
}

export default PricingCatalog
