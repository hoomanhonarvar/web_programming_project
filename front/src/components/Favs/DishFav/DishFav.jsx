import React from 'react'
import PropTypes from "prop-types"
import './DishFav.modules.css'
import FoodPhoto from '../../../Pics/FoodPhotos/ChocolateCake.png'
import { Link } from 'react-router-dom'
import FoodCards from '../../Cards/FoodCards/FoodCards'
export const DishFav = ({
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
    <div className='DishFavMainContainer'>
      <div className="FastDishes">
        <div className="FastDelRow">
          <FoodCards />
          <FoodCards />
          <FoodCards />

        </div>
        <div className="FastDelRow">
          <FoodCards />
          <FoodCards />
          <FoodCards />
        </div>
        <div className="FastDelRow">
          <FoodCards />
          <FoodCards />
          <FoodCards />
        </div>
      </div>
    </div >
  );
};

DishFav.propTypes = {
  RestDist: PropTypes.string,
  FoodRate: PropTypes.string,
  FoodType: PropTypes.string,
  FoodPhotoPath: PropTypes.object,
  FoodName: PropTypes.string,
  FoodDelivery: PropTypes.string,
  FoodLink: PropTypes.string
};


export default DishFav