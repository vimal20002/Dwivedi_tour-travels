import React from 'react'
import './account.css'
import { payConti } from '../redux/api'
const PastBookedCard = ({destination,date,price,bid,paid}) => {
  const handlePay=async()=>{
    const bid = JSON.parse(localStorage.getItem("bid"))
    console.log(bid)
    const {data}= await payConti({amount:price,
      _id:bid
    });
    console.log(data)

    const key = "rzp_test_hnhwpr4PlYB0mw"
    const options = {
      "key": key, // Enter the Key ID generated from the Dashboard
      "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Dwivedi Tour&Travels",
      "description": "paying for your trip",
      "image":"https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/cf/e5/cb.jpg",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "http://localhost:8000/verifypay",
      "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#121212 "
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  }
  return (
    <>
        <div className="booked-card">
                
                <div className="destination"><h4>Destination</h4>{destination}</div>
                <div className="travel-date"><h4>Date</h4>{date}</div>
                <div className="travel-fare"><h4>Fare</h4>{price}</div>
                <div className="travel-fare"><h4>Status</h4>{paid?"Paid":"Unpaid"}</div>
                { paid ? "" :   <div className="book-btn" onClick={handlePay}>Pay Now</div> }  
   
               </div>
    </>
  )
}

export default PastBookedCard
