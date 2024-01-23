import React from 'react'
import PropTypes from "prop-types";
import './SettingCard.modules.css'
import ProfilePurple from '../../../Pics/Icons/Icons/Bookmark.svg'
import chevroneRight from '../../../Pics/Icons/Icons/Chevron-right.svg'
export const SettingCard = ({
  Icon = { ProfilePurple },
  OptionText = 'Text'


}) => {
  return (

    <div className="SettingListItem">
      <a href="#">
  <div className="Left">
       <div className="SettingIcon">
          <img src={Icon} alt="Icon" />
        </div>
        <div className="Setting">
          <p>{OptionText}</p>
        </div>
  </div>
  <div className="Right">
    <img src={chevroneRight} alt="Right Arrow" />
  </div>
      </a>


    </div>

  );
};



SettingCard.propTypes = {
  Icon: PropTypes.object,
  OptionText: PropTypes.string
};

export default SettingCard