import React from 'react'
import PropTypes from "prop-types"
import './PreviousOrderDetail.modules.css'
import Cross from '../../Pics/Icons/Icons/16px/Close.svg'
import RightArrow from '../../Pics/Icons/Icons/Chevron-right.svg'
import DeliveryIcon from '../../Pics/Icons/Icons/CartIcons/Delivery.svg'
import PromoIcon from '../../Pics/Icons/Icons/CartIcons/Promo.svg'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import { CartListItem } from '../ListItem/CartListItem/CartListItem'
import BtnIcon from '../Buttons/IconBtns/BtnIcon'
import plus from '../../Pics/Icons/Icons/24px/Plus.svg'


export const OrderDets = ({
  RestName = "Pizza Hut",
  DeliveryAddress = "300 Post Street San Francisco, CA",

}) => {

  const CloseDets = () => {
    document.getElementById('OrderDets').style.display = "none";
    document.getElementById('mavi').style.display = "none";
  }

  return (
    <div className='OrderDetsMainContainer' id='OrderDets'>
      {/* Title & CloseBtn */}
      <div className="CartUpper">
        <div className="CartTitle">
          <div className="CartTitleFirstPart">
            Order details
          </div>
        </div>
        <div className="CartCloseBtn">
          <button className='BtnBgCross' onClick={CloseDets} >

            <img src={Cross} alt="Cross" />

          </button>

        </div>
      </div>


      {/* Addres */}
      <div className="CartAddressSection">
        <div className="AddBox">
          <div className="AddLable">DELIVER TO</div>
          <div className="CartAddress">
            {DeliveryAddress}
          </div>
        </div>
        <div className="AddBoxMoreIcon">
          <img src={RightArrow} alt="Right Arrow" />
        </div>
      </div>

      {/* RSNAme+ListOfOrder */}

      <div className="CartOrderList">
        <div className="OLRestName">
          {RestName}
        </div>
        <div className="OLItems">
          {/* <CartListItem />
          <CartListItem /> */}

        </div>
      </div>


      {/* List of Costs */}

      {/* Review Section */}




      {/* Place new Order */}
      <div className="CartCheckOutSection">
        <BtnPrimary title="Place New order" />
      </div>
    </div >
  );
};

OrderDets.propTypes = {
  DeliveryAddress: PropTypes.string
};


export default OrderDets