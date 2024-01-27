import React from 'react'
import PropTypes from "prop-types"
import './TLInAc.modules.css'
import clock from '../../../../Pics/Icons/Icons/16px/Clock.svg'
export const TLInAc = ({
  ItemContent = "Deliverd",


}) => {
  return (
    <div className='AcItem' >
      {/*  */}
      <div className="BoxAndItemContent">
        < div className="CheckedBoxnac" >
          <img src={clock} alt="checkmark" />
        </div >
        {/*  */}
        < div className="ItemContent" >
          {ItemContent}
        </div >
      </div>
      {/*  */}
    </div >
  )
}

TLInAc.propTypes = {
  ItemContent: PropTypes.string,
  ItemAcTime: PropTypes.string
};

export default TLInAc