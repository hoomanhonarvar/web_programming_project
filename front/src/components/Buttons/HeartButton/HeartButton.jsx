import React from 'react'
import './HeartButton.modules.css'
import PropTypes from "prop-types"

import Heart from '../../../Pics/Icons/Icons/20px/Heart.svg'
import HeartFill from '../../../Pics/Icons/Icons/20px/HeartFilled.svg'
function HeartButton(
  red
) {

  console.log(red.red)

  return (
    <button className='BtnBgHeart' >
      {red.red

      ?<img src={HeartFill} alt="Heart" />
        :<img src={Heart} alt="Heart" />
      }
   
    </button>
  )
}



HeartButton.propTypes = {
 red:PropTypes.bool

};
export default HeartButton