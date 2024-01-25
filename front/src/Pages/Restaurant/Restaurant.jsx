import React from 'react'
import './Restaurant.modules.css'
import PropTypes from "prop-types"
import Navbar from '../../components/Navbar/Navbar'
import RestInfoBox from '../../components/RestaurantInfo/RestInfoBox';
import RestBanner from '../../components/Banners/RestaruntBanner/RestBanner'
export const RestaurantPage = ({


}) => {
  return (
    <div className='RestCardMainCont'>
      <div className="MainRestaurantScreen">
        <Navbar />


        {/* Banner */}
        <RestBanner/>

        {/* Information */}
        <RestInfoBox />

        {/* Menu */}


        {/* FoodCards Rows */}


      </div>
    </div>
  );
};

RestaurantPage.propTypes = {
  RestLogoPath: PropTypes.object,
  RestName: PropTypes.string,
  RestRate: PropTypes.string,
  RestCost: PropTypes.string,
  RestDist: PropTypes.string,
  RestLink: PropTypes.string,
  RestDelivery: PropTypes.string,
  RestID: PropTypes.string

};


export default RestaurantPage;

