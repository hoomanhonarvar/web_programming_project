import React from 'react'
import PropTypes from "prop-types";
import './PreviousOrder.css'
import clock from '../../../../Pics/Icons/Icons/16px/Clock.svg'
import calendar from '../../../../Pics/Icons/Icons/16px/Calendar.svg'
import BtnPrimaryOrange from '../../../Buttons/PrimarybtnsOrange/BtnPrimaryOrange';
import BtnSecondaryOrange from '../../../Buttons/SecondarybtnsOrange/BtnSecondaryOrange';
import CompletedBadge from '../../../Badges/CompletedBadge/CompletedBadge';
import CancledBadge from '../../../Badges/CancledBadge/CancledBadge';
import { OrderListItme } from '../../../ListItem/OrderListItem/OrderListItem';
export const PreviousOrder = ({
  RestName = 'Burger King',
  OrderTime = '11:54 PM',
  OrederDate = 'September 16, 2020',
  Finish_cancle="F",
  dish_list={}

}) => {
  const OpenDets =()=>{

    document.getElementById('OrderDets').style.display="flex";
    document.getElementById('mavi').style.display="Block";
    
    }
  return (
    <div className='MainPreviousOrderCard'>
      {/* Name + Badge */}
      <div className="UpcomingTitle">

        <div className="RestNamelabel">
          <div className="title">
            {RestName}
          </div>
        </div>
        <div className="Badge">
          <div className="badge">
            {Finish_cancle==="F"
            ?<CompletedBadge/>
            :<CancledBadge />
            }
            
          </div>
        </div>

      </div>

      {/* Time Date */}
      <div className="DateAndTime">
        <div className="OrderTimeDate">
          <img src={calendar} alt="calendar" className='POrderIcon' />
          {OrederDate}
        </div>
        <div className="OrderTimeDate">
          <img src={clock} alt="clock" className='POrderIcon' />
          {OrderTime}
        </div>
      </div>

      {/* OrderList */}
      <OrderListItme dish_list={dish_list}/>
      {/* Buttons */}


      <div className="POrderBtns">
        <div className="PODetsBtn" onClick={OpenDets}>
          <BtnPrimaryOrange title="Detail" />
        </div>

        <div className="POgethelpBtn">
          <BtnSecondaryOrange title="Get help" />
        </div>

      </div>

    </div >
  );
};



PreviousOrder.propTypes = {
  RestName: PropTypes.string,
};

export default PreviousOrder

