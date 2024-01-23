import React from 'react'
import './SildebarProfile.css'
import PropTypes from "prop-types";
import Options from '../../Pics/Icons/Icons/24px/Options.svg'
import Avatar from '../../Pics/Avatar/Image.svg'

export const SildebarProfile = ({
  Name = 'Mark Clarke',
  Email = 'markclarke@gmail.com'

}) => {
  return (

    <div className="ProfileContainer">
      <div className="ProfileAvatar">
        <img src={Avatar} alt="Avatar" className="avatar" />
      </div>
      <div className="ProfileDets">
        <div className="ProfileName">{Name}</div>
        <div className="ProfileEmail">{Email}</div>
      </div>
      <div className="Options">
        <img src={Options} alt="Options" />
      </div>
    </div>

  );
};



SildebarProfile.propTypes = {
  Name: PropTypes.string,
  Email: PropTypes.string
};

export default SildebarProfile