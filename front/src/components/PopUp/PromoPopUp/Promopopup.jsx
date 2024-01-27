import React from 'react'
import './Promopopup.modules.css'
import BtnPrimary from '../../Buttons/Primarybtns/BtnPrimary'
import Cross from '../../../Pics/Icons/Icons/16px/Close.svg'

function Promopopup() {
  return (
    <div className='mainPromoPopUp'>
      {/* Title + Close btn */}
      <div className="CartUpper">
        <div className="CartTitle">
          <div className="CartTitleFirstPart">
            Enter promo code
          </div>
        </div>
        <div className="CartCloseBtn">
          <button className='BtnBgCross' >

            <img src={Cross} alt="Cross" />

          </button>

        </div>
      </div>
      {/* input Promo Code */}
      <div className="PromoInput">
        <input type="text" className="Promocode" />
      </div>
      {/* Confirm */}
      <div className="ConfirmPromo">
        <BtnPrimary title="Confirm" />
      </div>
    </div>
  )
}

export default Promopopup