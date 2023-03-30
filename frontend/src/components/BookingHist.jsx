import React from 'react'
import "./bookinghist.css"
import Historycard from './Historycard'
const BookingHist = () => {
    const bookingData=[
   {
    name:"Raghav",
    Email:"classic@gmail.com",
    Pickup:"Delhi",
    Destination:"Haridwar",
    Time:"4:00PM"
   },
   {
    name:"Raghav",
    Email:"classic@gmail.com",
    Pickup:"Delhi",
    Destination:"Haridwar",
    Time:"4:00PM"
   },
   {
    name:"Raghav",
    Email:"classic@gmail.com",
    Pickup:"Delhi",
    Destination:"Haridwar",
    Time:"4:00PM"
   },
   {
    name:"Raghav",
    Email:"classic@gmail.com",
    Pickup:"Delhi",
    Destination:"Haridwar",
    Time:"4:00PM"
   },
   {
    name:"Raghav",
    Email:"classic@gmail.com",
    Pickup:"Delhi",
    Destination:"Haridwar",
    Time:"4:00PM"
   }
    ]

    
  return (
    <>
    <div className="main-history">
        <h4 className="heading">Past Bookings</h4>
      {
        bookingData.map((e)=>{
            return <Historycard name={e.name} email={e.Email} pickup={e.Pickup} destination={e.Destination} time={e.Time}       />
        })
      }
        </div>  
    </>
  )
}

export default BookingHist
