import React from 'react'
import './pricingcatalog.css'
import PricingCard from './PricingCard'
const PricingCatalog = () => {
  const catalogData=[
      {
        "price":"800",
        car:"Swift Dzire",
        "plan":"Basic Plan ",
         "distance":"40",
         "id":"1",
         hour:"4",
         extra:"12"
      }
      ,{
        "price":"1300",
        car:"Inova crsta",
        "plan":"Basic Plan ",
         "distance":"40",
         "id":"3",
         hour:"4",
         extra:"22"
      },
      {
        "price":"1600",
        car:"Swift Dzire",
        "plan":"Pro Plan ",
         "distance":"80",
         "id":"2",
         hour:"8",
         extra:"12"
      }
      ,{
        "price":"2600",
        car:"Invova crsta",
        "plan":"Pro Plan ",
         "distance":"80",
         "id":"3",
         hour:"8",
         extra:"22"
      } ,{
        "price":"2400",
        car:"Swift Dzire",
        "plan":"Advance Plan ",
         "distance":"120",
         "id":"3",
         hour:"12",
         extra:"12"
      }     
  ]
  return (
   
    <>
      <div className="main-catalog">
        { catalogData?.map((e)=>{
           return <PricingCard extra={e.extra} car={e.car} show={true} flag={true} price={e.price} hour={e.hour} distance={e.distance} plan={e.plan} id={e.id}   />  
         })
        }
      </div>
    </>
  )
}

export default PricingCatalog
