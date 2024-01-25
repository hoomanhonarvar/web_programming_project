import React from 'react'
import './RestaurantCardMd.modules.css'
import PropTypes from "prop-types"
import RestLogoPath from '../../../Pics/Logo/Cards/RsLogo.svg'
import RateStar from '../../../Pics/Icons/Icons/16px/Star.svg'
import Dine from '../../../Pics/Icons/Icons/16px/Silverware.svg'
import Money from '../../../Pics/Icons/Icons/16px/Money.svg'
import Location from '../../../Pics/Icons/Icons/16px/Location.svg'
import { Link } from 'react-router-dom'
import DBadge from '../../Badges/DeliveryBadge/DBadge'
export const RestaurantCardMd = ({

  RestLogo = RestLogoPath,
  RestName = "Burger King",
  RestRate = "4.2",
  RestType = "Burger",
  RestCost = "$",
  RestDist = "4,2Km",
  RestLink = "/Restaurant",
  RestDelivery = "Free delivery",
  RestID = "1"

}) => {
  return (

    <div className='RestCardMainCont'>
      <Link to={RestID}>
        <div className="RestLogo">
          <img src={RestLogo} alt="restpath" />
        </div>
        <div className="Restinfo">
          {/* RestName */}
          <div className="RestNameContainer">
            <h3 className="RSname">{RestName}</h3>
          </div>
          {/* Rest Rating Type Cost */}
          <div className="InfoContainer">
            <div className="InfoRow RatingBox">
              <img className='InfoIcon' src={RateStar} alt="Star" />
              {RestRate}
            </div>
            <div className="InfoRow RestType">
              <img className='InfoIcon' src={Dine} alt="Dine" />
              {RestType}
            </div>
            <div className="InfoRow RestCost">
              <img className='InfoIcon' src={Money} alt="Money" />
              {RestCost}
            </div>
          </div>

          {/* Delivery & distance*/}


          <div className="InfoContainer">
            <div className="InfoRow RestType">
              <DBadge title={RestDelivery} />
            </div>
            <div className="InfoRow RestCost">
              <img className='InfoIcon' src={Location} alt="Money" />
              {RestDist}</div>
          </div>

        </div>
      </Link>
    </div>
  );
};

RestaurantCardMd.propTypes = {
  RestLogoPath: PropTypes.object,
  RestName: PropTypes.string,
  RestRate: PropTypes.string,
  RestCost: PropTypes.string,
  RestDist: PropTypes.string,
  RestLink: PropTypes.string,
  RestDelivery: PropTypes.string,
  RestID: PropTypes.string

};


export default RestaurantCardMd;

