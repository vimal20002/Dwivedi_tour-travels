import React from 'react'
import './account.css'
const PastBookedCard = ({destination,date,fare}) => {
  return (
    <>
        <div className="booked-card">
                
                <div className="destination"><h4>Destination</h4>{destination}</div>
                <div className="travel-date"><h4>Date</h4>{date}</div>
                <div className="travel-fare"><h4>Fare</h4>{fare}</div>
   
               </div>
    </>
  )
}

export default PastBookedCard
