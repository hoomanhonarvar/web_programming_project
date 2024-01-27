import './RestBanner.modules.css'
import React from 'react'
import PropTypes from "prop-types"
import RestLogoPath from '../../../Pics/Logo/Cards/RsLogo.svg'
import { Link } from 'react-router-dom'
import RestCoverPhoto from '../../../Pics/BannerPhotos/Cover.png'
import HeartButton from '../../Buttons/HeartButton/HeartButton'

export const RestBanner = ({

  RestLogo = RestLogoPath,
  RestCover = RestCoverPhoto

}) => {
  return (
    <div className="box">
      <div className="banner">
        <div className="overlap-group">
          <div className="CoverImage">
          <HeartButton className="icons-icon-fill-px" />
          </div>
          <img className="RestLogoMain" alt="Logo" src={RestLogo} />
         
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