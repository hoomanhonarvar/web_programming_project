import React from 'react'
import PropTypes from "prop-types"
import './TLIAc.modules.css'
import check from '../../../../Pics/Icons/Icons/16px/Checkmark.svg'
export const TLIAc = ({
  ItemContent = "Food is ready",
  ItemAcTime = "12:42 am"

}) => {
  return (
    <div className='AcItem' >
      {/*  */}
      <div className="BoxAndItemContent">
        < div className="CheckedBox" >
          <img src={check} alt="checkmark" />
        </div >
        {/*  */}
        < div className="ItemContent" >
          {ItemContent}
        </div >
      </div>
      {/*  */}
      < div className="ItemAcTime" >
        {ItemAcTime}
      </div >
    </div >
  )
}

TLIAc.propTypes = {
  ItemContent: PropTypes.string,
  ItemAcTime: PropTypes.string
};

export default TLIAc