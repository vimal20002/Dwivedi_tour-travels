import React, { useEffect, useState } from 'react'
import './booking.css'
import { useDispatch} from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import {toast} from "react-toastify"
import { bookCabs } from '../redux/features/userSlice'

const Booking = ({plan}) => {
  const params = useParams();
  const id = params.id;
  console.log(id)
  const[pickLoc, setPickLoc] = useState("");
  const[dest, setDest] = useState("");
  const[date, setDate] = useState("");
  const[time, setTime] = useState("");
  const[feed, setFeed] = useState("");

  useEffect(()=>{
    if(id.length<=4){
          console.log(id);
          const price=id.slice(1);
          console.log(price);
    }
    else{
      const idd = id.slice(1);
      const data = JSON.parse(localStorage.getItem("cards"))
      const obj = data.filter((e)=>{
        return e?._id===idd;
      })
      setDest(obj[0]?.title)
    }
 
  },[id])


  const dispatch =useDispatch();
  const history=useHistory();
   
        
        const submitForm = ()=>{
          const formData = {
            email:JSON.parse(localStorage.getItem("data")).email,
            pickLoc:pickLoc,
            dest:dest,
            date:date,
            time:time,
            feed:feed,
          }
          dispatch(bookCabs({formData,history,toast}))

          console.log(formData)
        }
  return (
    <>  
     <div className="car-form">
     <input type="text" name='from' placeholder='Choose Pickup Location' autoFocus value={pickLoc} onChange={(e)=>{setPickLoc(e.target.value)}}/>
     <h3 className='h4-heading'>To</h3>
     <input type="text" name='to' placeholder='Choose Drop Location' autoFocus value={dest} onChange={(e)=>{setDest(e.target.value)}}/>
     <h4 className='h4-heading'>Pickup Date & Time</h4>
     <input type="date" name="date"  autoFocus value={date} onChange={(e)=>{setDate(e.target.value)}}/>
     <input type="time" name="time" autoFocus value={time} onChange={(e)=>{setTime(e.target.value)}}/>
     <textarea name="suggestions" placeholder='Any Suggestions For Driver' cols="25" rows="3" autoFocus value={feed} onChange={(e)=>{setFeed(e.target.value)}}/>
     <div className="book-btn" onClick={()=>{submitForm()}}>Book Now</div>
    </div>
    </>
  )
}

export default Booking
