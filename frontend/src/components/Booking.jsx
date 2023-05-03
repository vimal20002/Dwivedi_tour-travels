import React, { useEffect, useState } from 'react'
import './booking.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from "react-toastify"
import { bookCabs } from '../redux/features/userSlice'
import { payConti } from '../redux/api'
import PricingCard from './PricingCard'

const Booking = ({ plan }) => {
  const params = useParams();
  const id = params.id;
  const [pickLoc, setPickLoc] = useState("");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [feed, setFeed] = useState("");
  const [price, setPrice] = useState("");
  const[show,setShow]=useState(false)
  const [py, setPy] = useState(false);

  const key = process.env.REACT_APP_RAZOR_KEY;
const {tour}=useSelector((state)=>({...state.user}))
  useEffect(() => {
    if (id?.length <= 5) {
      const pr =id?.slice(1);
      setPrice(pr);
      setShow(true)
    }
    else {
      const idd = id?.slice(1);
      const obj = tour?.filter((e) => {
        return e?._id === idd;
      })
      setDest(obj&&obj[0]?.title)
      setPrice(obj&&obj[0]?.price)
    }
// eslint-disable-next-line
  }, [id])
  
  
  const dispatch = useDispatch();
  const history = useHistory();

  const submitForm =() => {
    if(JSON.parse(localStorage.getItem("user"))===null)
    toast.error("Login first please")
    else{
    const formData = {
      email: JSON.parse(localStorage.getItem("user")).email,
      pickLoc: pickLoc,
      dest: dest,
      date: date,
      time: time,
      feed: feed,
      phone:phone,
      price:price
    }
    dispatch(bookCabs({ formData, history, toast }))
    document.getElementById("pmt").style.display="flex";
    document.getElementById("frm").style.display="none";  
  }
  }
  const handlemtd=(tp)=>{
    if(tp==="on")
    {
      setPy(true)
      document.getElementById("on").classList.add("acc");
      document.getElementById("cs").classList.remove("acc");
    }
    else{
      setPy(false)
      document.getElementById("cs").classList.add("acc");
      document.getElementById("on").classList.remove("acc");
      history.push('/')
    }
  }
  const handlePay=async()=>{
    const bid = JSON.parse(localStorage.getItem("bid"))
    const {data}= await payConti({amount:price,
      _id:bid
    })

    const options = {
      "key": key, // Enter the Key ID generated from the Dashboard
      "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Dwivedi Tour&Travels",
      "description": "paying for your trip",
      "image":"https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/cf/e5/cb.jpg",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": process.env.REACT_APP_CALLBACK_URL,
     
      "notes": {
        "address": "1045, Nearby Rotary Public School, Sector-22, Gurugram,Gurugram, Haryana, 122015"
      },
      "theme": {
        "color": "#121212 "
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  }
  const obj = JSON.parse(localStorage.getItem("plan"));

  return (
    <>
      <div className="car-form">
      <PricingCard flag={false} extra={obj?.extra} show={show} car={obj?.car} price={obj?.price} hour={obj?.hour} distance={obj?.distance} plan={obj?.plan} id={obj?.id}   />
        <div id="frm">
        <input type="text" name='from' placeholder='Choose Pickup Location'  value={pickLoc} onChange={(e) => { setPickLoc(e.target.value) }} />
        <h3 className='h4-heading'>To</h3>
        <input type="text" name='to' placeholder='Choose Drop Location'  value={dest} onChange={(e) => { setDest(e.target.value) }} />
        <input type="number" name="phone"   placeholder='9999999999'  value={phone} onChange={(e) => { setPhone(e.target.value)}}  id="phone" />
        <h4 className='h4-heading'>Pickup Date & Time</h4>
        <input type="date" name="date"  value={date} onChange={(e) => { setDate(e.target.value) }} />
        <input type="time" name="time"  value={time} onChange={(e) => { setTime(e.target.value) }} />
        <textarea name="suggestions" placeholder='Any Suggestions For Driver' cols="25" rows="3"  value={feed} onChange={(e) => { setFeed(e.target.value) }} />
        <div className="book-btn" onClick={() => { submitForm() }}>Book Now</div>
        </div>
        <div id='pmt'>
       <h5>Payment method</h5> 
        <div className="mth">
          <div className="mbtn" id='on' onClick={()=>handlemtd("on")}>Online</div>
          <div className="mbtn" id='cs' onClick={()=>handlemtd("cs")}>Cash</div>
        </div>
        {     py&& <div className="book-btn" id='pyy' onClick={handlePay}>Pay Online</div>
}
</div>
      </div>
    </>
  )
}

export default Booking
