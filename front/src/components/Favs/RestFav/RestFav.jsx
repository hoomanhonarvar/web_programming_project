import React from 'react'
import PropTypes from "prop-types"
import './RestFav.modules.css'
import FoodPhoto from '../../../Pics/FoodPhotos/ChocolateCake.png'
import Dine from '../../../Pics/Icons/Icons/16px/Silverware.svg'
import StareRate from '../../../Pics/Icons/Icons/16px/Star.svg'
import Delivery from '../../../Pics/Icons/Icons/16px/Delivery.svg'
import { DBadge } from '../../Badges/DeliveryBadge/DBadge'
import { Link } from 'react-router-dom'
import RestaurantCardMd from '../../Cards/RestaurantCards/RestaurantCardMd'
export const RestFav = ({
  RestDist = '0,3Km',
  FoodRate = '4,3',
  FoodType = 'Desserts',
  FoodPhotoPath = FoodPhoto,
  FoodName = 'Chocolate Cheesecake',
  FoodPrepDuration = '15 - 25 min',
  FoodDelivery = '0.99$ Delivery',
  FoodLink = 'Chocolate Cheesecake'

}) => {
  return (
    <div className='RestFavMainContainer'>
      <div className="FastDishes">
        <div className="RestRow">
          <RestaurantCardMd />
          <RestaurantCardMd />
          <RestaurantCardMd />

        </div>
        <div className="RestRow">
          <RestaurantCardMd />
          <RestaurantCardMd />
          <RestaurantCardMd />
        </div>
        <div className="RestRow">
          <RestaurantCardMd />
          <RestaurantCardMd />
          
        </div>
      </div>
    </div >
  );
};

RestFav.propTypes = {
  RestDist: PropTypes.string,
  FoodRate: PropTypes.string,
  FoodType: PropTypes.string,
  FoodPhotoPath: PropTypes.object,
  FoodName: PropTypes.string,
  FoodDelivery: PropTypes.string,
  FoodLink: PropTypes.string
};


export default RestFav