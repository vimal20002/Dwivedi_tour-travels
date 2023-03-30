import React from 'react'
import "./historycard.css"
const Historycard = ({name,email,pickup,destination,time}) => {
  return (
    <>
      <div className="main-history-card">
        <div className="name"><h4>Name :</h4>{name}</div>
        <div className="email"><h4>Email :</h4> {email}</div>
        <div className="pickloc"><h4>Pickup :</h4> {pickup}</div>
        <div className="dest"><h4>Destination :</h4>{destination}</div>
        <div className="time"><h4>Time :</h4> {time}</div>
      </div>
    </>
  )
}

export default Historycard
