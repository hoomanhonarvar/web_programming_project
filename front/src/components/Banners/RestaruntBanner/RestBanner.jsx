import './RestBanner.modules.css'
import React from 'react'
import PropTypes from "prop-types"
import RestLogoPath from '../../../Pics/Logo/Cards/RsLogo.svg'
import { Link } from 'react-router-dom'
import RestCoverPhoto from '../../../Pics/BannerPhotos/Cover.png'

export const RestBanner = ({

  RestLogo = RestLogoPath,
  RestCover = RestCoverPhoto

}) => {
  return (

    <div className='RestaurantBanner'>
      <div className="box">
        <div className="banner">
          <div className="overlap-group">
            <img className="image" alt="Image" src={RestCover} />
            <div className="RestLogoMain">
              <img className="logo" alt="Logo" src={RestLogo} />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

RestBanner.propTypes = {
  RestLogoPath: PropTypes.object,
  RestCover: PropTypes.object

};






export default RestBanner