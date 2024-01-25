import React from 'react'
import './RestInfoBox.modules.css'
import PropTypes from "prop-types"
import RateStar from '../../Pics/Icons/Icons/24px/Star.svg'
import Dine from '../../Pics/Icons/Icons/24px/Silverware.svg'
import Money from '../../Pics/Icons/Icons/24px/Money.svg'
import Location from '../../Pics/Icons/Icons/24px/Location.svg'
import { Link } from 'react-router-dom'
import HBadge from '../Badges/HoursBadge/HBadge'
import DBadge from '../Badges/DeliveryBadge/DBadge'
import CBadge from '../Badges/CopounBadge/CBadge'
import SildeBar from '../SildeBar/SildeBar'
export const RestInfoBox = ({

  RestName = "Burger King",
  RestRate = "4.2",
  RestType = "Burger",
  RestCost = "$",
  RestDist = "4,2Km",
  RestLink = "/Restaurant",
  RestDelivery = "Free delivery",
  RestID = "1",
  RestCoupon = "Buy 2 get 1 free",
  RestWorkTime = "Opens at 12 PM",
  RestAddress = "Irving St, San Francisco, California",
  RestDescription = "It is one of the most iconic and well-recognizable fast food restaurants out there which offers really amazing food and drinks."

}) => {
// Needs Work (Vars for passing to components)

  
  return (
    <>
    
    <div className='RestInfoContainer'>
    {/* <SildeBar/> */}
      {/* Row 1 : Title +  Badges */}
      <div className="InfoBoxTitle">
        <div className="InfoTitle">
          {RestName}
        </div>
        <div className="Badges">
          <DBadge title={RestDelivery} />
          <CBadge title={RestCoupon} />
          <HBadge title={RestWorkTime} />
        </div>
      </div>
      {/* Row 2 : description */}
      <div className="InfoBoxDesc">
        <p>
          {RestDescription}
        </p>

      </div>
      {/* Row 3 : info Row */}
      <div className="InfoRowRsInfo">

        {/*  Rate*/}
        <div className="InfoRowRsInfo RatingBox">
          <img className='InfoIcon' src={RateStar} alt="Star" />
          {RestRate}
        </div>
        {/* Type */}
        <div className="InfoRowRsInfo RestType">
          <img className='InfoIcon' src={Dine} alt="Dine" />
          {RestType}
        </div>

        {/* Cost */}
        <div className="InfoRowRsInfo RestCost">
          <img className='InfoIcon' src={Money} alt="Money" />
          {RestCost}
        </div>
        {/*  Loc*/}
        <div className="InfoRowRsInfo RestCost">
          <img className='InfoIcon' src={Location} alt="Money" />
          {RestDist}({RestAddress})
        </div>

      </div>

    </div >
    </>
  );
};

RestInfoBox.propTypes = {
  RestName: PropTypes.string,
  RestRate: PropTypes.string,
  RestCost: PropTypes.string,
  RestDist: PropTypes.string,
  RestLink: PropTypes.string,
  RestDelivery: PropTypes.string,
  RestID: PropTypes.string,
  RestAddress: PropTypes.string,
  RestDescription: PropTypes.string,
  RestCoupon: PropTypes.string,
  RestWorkTime: PropTypes.string
};


export default RestInfoBox;

