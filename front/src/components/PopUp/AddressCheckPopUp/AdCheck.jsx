import React from 'react'
import PropTypes from "prop-types"
import './AdCheck.modules.css'
import BtnPrimary from '../../Buttons/Primarybtns/BtnPrimary'
import Cross from '../../../Pics/Icons/Icons/16px/Close.svg'
import FormLable from '../../Labels/SignupLables/FormLable'


export const AdCheck = ({
 streetNumber="300 Post Street",
 City = "San Francisco",
 State="California",
 ZipCode="12345"

})=> {
  

  return (
    <div className='mainAdcheck'>
      {/* Title + Close btn */}
      <div className="CartUpper">
        <div className="CartTitle">
          <div className="CartTitleFirstPart">
            Delivery address
          </div>
        </div>
        <div className="CartCloseBtn">
          <button className='BtnBgCross' >

            <img src={Cross} alt="Cross" />

          </button>

        </div>
      </div>
      {/* input Promo Code */}
      <div className="field">
        <FormLable title="STREET NAME" />
        <input value={streetNumber} className='forminp' type="text" />
      </div>

      <div className="field">
        <FormLable title="CITY" />
        <input value={City} className='forminp' type="text" />
      </div>

      <div className="field">
        <FormLable title="STATE" />
        <input value={State} className='forminp' type="text" />
      </div>

      <div className="field">
        <FormLable title="ZIP CODE" />
        <input value={ZipCode} className='forminp' type="text" />
      </div>




      {/* Confirm */}
      <div className="ConfirmPromo">
        <BtnPrimary title="Confirm" />
      </div>
    </div>
  )
}


AdCheck.propTypes = {
streetNumber: PropTypes.string,
City: PropTypes.string,
State: PropTypes.string,
ZipCode : PropTypes.string

};


export default AdCheck