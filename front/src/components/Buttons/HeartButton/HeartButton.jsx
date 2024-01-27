import React from 'react'
import './HeartButton.modules.css'
import Heart from '../../../Pics/Icons/Icons/20px/Heart.svg'
import HeartFill from '../../../Pics/Icons/Icons/20px/HeartFilled.svg'
function HeartButton() {
  return (
    <button className='BtnBgHeart' >

      <img src={Heart} alt="Heart" />
   
    </button>
  )
}

export default HeartButton