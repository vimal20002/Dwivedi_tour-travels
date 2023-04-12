import React, { useEffect, useState } from 'react'
import CardElement from './CardElement'
import {useDispatch} from 'react-redux'
import "./catalogue.css"
import { cardFetch } from '../redux/features/userSlice'
const Catalogue = () => {
  const dispatch =useDispatch();
  useEffect(()=>{
   dispatch(cardFetch());
  },[])
  const dummyData=JSON.parse(localStorage.getItem("cards"));
  return (<>
    <div className="main-ct">
    <h1 className='main-heading'>Featured Tours</h1>
         <br />
         <br />
         <hr />
    <div className="catalogue">
    {dummyData?.map((e)=>{
         return <CardElement title={e.title} imgUrl={e.imgUrl} price={e.price}/>
    })}
   </div>
    </div>
        
  
  
 
   </>
  )
}

export default Catalogue