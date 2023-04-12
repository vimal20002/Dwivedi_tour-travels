import React, { useState } from 'react'
import CardElement from './CardElement'
import "./catalogue.css"
const Catalogue = () => {
  
  return (<>
         <h1 className='main-heading'>Featured Tours</h1>
         <br />
         <br />
         <hr />
    <div className="catalogue">
    {dummyData?.map((e)=>{
         return <CardElement title={e.title} imgUrl={e.imgUrl} price={e.price}/>
    })}
   </div>
  
  
 
   </>
  )
}

export default Catalogue