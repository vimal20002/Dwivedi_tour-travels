import React from 'react'
import './account.css'
import PastBookedCard from './PastBookedCard'
const Account = () => {
    const accountInfo=
        {
            name:"Raghav Pandey",
            email:"raghavkanpur11@gmail.com"
        }
    const pastbookings=[
        {
          destination:"Manali" , 
          date: "02-02-2023",
          fare:"$300"
        },
        {
            destination:"Manali" , 
            date: "02-02-2023",
            fare:"$300"
          },{
            destination:"Manali" , 
            date: "02-02-2023",
            fare:"$300"
          },{
            destination:"Manali" , 
            date: "02-02-2023",
            fare:"$300"
          },{
            destination:"Manali" , 
            date: "02-02-2023",
            fare:"$300"
          }
       
    ]
    
  return (
    <>
     <div className="main-account">
        <div className="user-info"> <div className="media">
        <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik" alt="elonmast" />
        <div className="upload-img book-btn">Uplaod Image</div>
        </div>
        <div className="account-info">
            <h3>Your Name</h3>
            <input type="text" name="name" id="name" autoFocus  value={accountInfo.name}/>
            <h3>Your Email</h3>
           <input type="email" name="email" id="email" autoFocus value={accountInfo.email} />
           <div className="book-btn submit-btn">Submit Changes</div>
           <h4 className='forgot-password'>Forgot Password ?</h4>
        </div>
        </div>
        <div className="recent-bookings">
            <h4>Recent Bookings</h4>
            {
                pastbookings.map((e)=>{
                    return <PastBookedCard destination={e.destination} date={e.date} fare={e.fare} />
                })
            }
        </div>
         
     </div>
    </>
  )
}

export default Account
