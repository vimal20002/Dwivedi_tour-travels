import React, { useEffect, useState } from 'react'
import CardElement from './CardElement'
import {useDispatch, useSelector} from 'react-redux'
import "./catalogue.css"
import { cardFetch } from '../redux/features/userSlice'
import lod from "./images/lod.gif"
const Catalogue = () => {
     const [data,setData]=useState(null)
  const dispatch =useDispatch();
  useEffect(()=>{
     console.log("hey")
   dispatch(cardFetch());
  },[])
  const {loading,tour} = useSelector((state)=>({...state.user}))
  const dummyData=JSON.parse(localStorage.getItem("cards"));
  
  return (<>
    <div className="main-ct">
     {loading ?  <img src={lod} className='ldd' alt="" />:
     <>
    <h1 className='main-heading'>Featured Tours</h1>
         <br />
         <br />
         <hr />
    <div className="catalogue">
    {dummyData && dummyData?.map((e)=>{
         return <CardElement title={e.title} imgUrl={e.imgUrl} price={e.price} id={e._id}/>
    })}
   </div>
   </>
   }
    </div>
        
  
  
 
   </>
  )
}

export default Catalogue