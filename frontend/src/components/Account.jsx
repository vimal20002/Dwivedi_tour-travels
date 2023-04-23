import React, { useEffect, useState } from 'react'
import './account.css'
import PastBookedCard from './PastBookedCard'
import { useDispatch, useSelector } from 'react-redux';
import { userbooking } from '../redux/features/userSlice';
import lod from "./images/lod.gif"
import { useHistory } from 'react-router-dom';
const Account = () => {
    const accountInfo=JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch()
    const [data,setDt]=useState(null);
    const history = useHistory()
    const {booking,loading}=useSelector((state)=>({...state.user}))
    const getBooking=()=>{
      console.log(accountInfo)
      dispatch(userbooking({email:accountInfo?.email}))
    }
    useEffect(()=>{
      setDt(booking)

    },[booking])
    useEffect(()=>{

    },[data])
    const {status}=useSelector((state)=>({...state.user}));
    useEffect(()=>{
      if(accountInfo===null &&status===false)
      {
        history.push('/login')
      }
    })
    
  return (
    <>
     <div className="main-account">
        <div className="user-info"> <div className="media">
        <img src={accountInfo?.imageUrl?accountInfo?.imageUrl:`http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik`} alt="elonmast" />
        </div>
        <div className="account-info">
            <h3>Your Name</h3>
            <input type="text" name="name" id="name" autoFocus  value={accountInfo?.name}/>
            <h3>Your Email</h3>
           <input type="email" name="email" id="email" autoFocus value={accountInfo?.email} />
           <div className="book-btn submit-btn">Submit Changes</div>
        </div>
        </div>  
        <div className="book-btn" onClick={getBooking}>Load Bookings</div>
        {loading?<img src={lod} alt='lod'/>:
        <div className="recent-bookings">
            <h4>Recent Bookings</h4>
            {
                data?.map((e)=>{
                  console.log(e)
                    return <PastBookedCard destination={e.dest} date={e.date} price={e.price} bid={e._id} paid={e.paid} />
                })
            }
        </div>}
         
     </div>
    </>
  )
}

export default Account
