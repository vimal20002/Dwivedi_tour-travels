import React from 'react'
import './booking.css'
const Carcard = ({carName,carUrl}) => {
    const setActive=(id)=>{
      const cars=Array.from(document.getElementsByClassName("carcard-body"));
      cars.map((e)=>{
        if(e.id===id){
            e.classList.add("active");
        }
        else{
            e.classList.remove("active");
        }
        return {};
      })
    }
  return (
    <> 
      <div className="carcard-body" id={carName}
      onClick={()=>{setActive(carName) }}
      >
          <img src={carUrl} alt="car" />
         <h3 className='car-title'>{carName}</h3>
      </div>
    </>
  )
}

export default Carcard
