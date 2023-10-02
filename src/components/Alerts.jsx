import React from 'react'
import './alerts.css'
import {FaCheck} from 'react-icons/fa'

export default function AlertComponent({ navigateTo }) {

    function handleOKButton()
    {
      //Write code for action here
    }
  return (
    <div className="alertContainer">
    <div className="alertBoxAppearence">
    <h3 className='alertHeading'>Action Successful!</h3>

    <FaCheck id='alertIcon'/>

   

    <button className="alertButton"
    onClick={(e)=>handleOKButton()}>OK</button>
  </div>

    </div>
   
  )
}