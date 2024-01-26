import React from 'react'
import './FavNav.modules.css'
import Silverware from '../../../Pics/Icons/Icons/16px/Silverware.svg'
import RestaurantIcon from '../../../Pics/Icons/Icons/16px/Restaurant.svg'
import { Link } from 'react-router-dom'
import RestFav from '../../Favs/RestFav/RestFav'
import DishFav from '../../Favs/DishFav/DishFav'
function FavNav() {
  return (
    <div className='FavNavbar'>
      <div className="ItemTab">
        <Link to="RestFav">
          <div className="ItemTabIcon">
            <img src={RestaurantIcon} alt="RestaurantIcon" />
          </div>

          <div className="ItemTabName">
            Restaurants
          </div>
        </Link>
      </div>

      <div className="ItemTab">
        <Link to="DishFav">

          <div className="ItemTabIcon">
            <img src={Silverware} alt="Silverware" />

          </div>

          <div className="ItemTabName">
            Dishes
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FavNav