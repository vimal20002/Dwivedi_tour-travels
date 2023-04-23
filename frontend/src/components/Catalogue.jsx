import React, { useEffect, useState } from 'react'
import CardElement from './CardElement'
import {useDispatch, useSelector} from 'react-redux'
import "./catalogue.css"
import { cardFetch } from '../redux/features/userSlice'
import lod from "./images/lod.gif"
const Catalogue = () => {
     const [data,setData]=useState(null)
  const dispatch =useDispatch();
  const {loading,tour} = useSelector((state)=>({...state.user}))
  useEffect(()=>{
   dispatch(cardFetch());
   // eslint-disable-next-line
},[])
useEffect(()=>{
       setData(tour)
       // eslint-disable-next-line
  },[loading,tour])
  useEffect(()=>{
     console.log(data)
     // eslint-disable-next-line
  },[data])
  
  return (<>
    <div className="main-ct">
     {loading ?  <img src={lod} className='ldd' alt="" />:
     <>
     <div className="ctg">
    <h1 className='main-heading'>Featured Tours</h1>
      
    <div className="catalogue">
    {data && data?.map((e)=>{
         return <CardElement title={e.title} imgUrl={e.imgUrl} price={e.price} id={e._id}/>
    })}
   </div>
   <h1 className='main-heading fc'>Why you choose Us</h1>

   </div>
   </>
   }
    </div>
        
  
  
 
   </>
  )
}

export default Catalogue