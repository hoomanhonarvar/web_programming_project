import React from 'react'
import PropTypes from "prop-types"
import './Cart.modules.css'
import Cross from '../../Pics/Icons/Icons/16px/Close.svg'
import RightArrow from '../../Pics/Icons/Icons/Chevron-right.svg'
import DeliveryIcon from '../../Pics/Icons/Icons/CartIcons/Delivery.svg'
import PromoIcon from '../../Pics/Icons/Icons/CartIcons/Promo.svg'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import { CartListItem } from '../ListItem/CartListItem/CartListItem'
import BtnIcon from '../Buttons/IconBtns/BtnIcon'
import plus from '../../Pics/Icons/Icons/24px/Plus.svg'


export const Cart = ({



  CartItemNo = 0,
  RestName = "",
  DeliveryAddress = "300 Post Street San Francisco, CA",
  DeliveryFee = "0$",
  PromoCode = "",
  
  dish_list={}



}) => {
  
const CloseCart =()=>{
  document.getElementById('Cart').style.display="none";
  document.getElementById('mavi').style.display="none";

}

  return (
    <div className='CartMainContainer' id='Cart'>
      {/* Title & CloseBtn */}
      <div className="CartUpper">
        <div className="CartTitle">
          <div className="CartTitleFirstPart">
            My Cart
          </div>
          <div className="CartTitleSecondPart"> ( {Object.keys(dish_list).length} items )</div>
        </div>
        <div className="CartCloseBtn">
          <button className='BtnBgCross' onClick={CloseCart} >

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
        {Object.keys(dish_list).length !== 0
      ?<>

        {dish_list.map((dish,i)=>
        <div className="OrderItem" >
      <div className="DishQuantity">
        {(dish+'').split(':')[0]}
       </div>

       <CartListItem DishName={(dish+'').split(':')[1]}
           FoodQuantity= {(dish+'').split(':')[0]}
          />
      </div>)}
      </>
          :<p></p>
      }
          

        </div>
      </div>


      {/* Delivery */}
      <div className="CartDeliverySection">
        <div className="DeliveryIcon">
          <img src={DeliveryIcon} alt="DeliveryIcon" />
        </div>

        <div className="CartDeliveryDets">
          <div className="SectionLable">
            Delivery
          </div>
          <div className="DeliveryFee">
            {DeliveryFee}
          </div>

        </div>
      </div>

      {/* PromoCode */}

      <div className="CartDeliverySection">
        <div className="DeliveryIcon">
          <img src={PromoIcon} alt="PromoIcon" />
        </div>

        <div className="CartDeliveryDets">
          <div className="SectionLable">
            Promo code
          </div>
          <div className="DeliveryFee">
            {PromoCode}
          </div>

        </div>

        <div className="DeliveryIcon">
          <BtnIcon Icon={plus} />
        </div>


      </div>

      {/* CheckOut */}
      <div className="CartCheckOutSection">
        <BtnPrimary title="Checkout" />
      </div>
    </div >
  );
};

Cart.propTypes = {


  CartItemNo: PropTypes.string,
  RestName: PropTypes.string,
  DeliveryAddress: PropTypes.string,
  DeliveryFee: PropTypes.string,
  PromoCode: PropTypes.string
};


export default Cart