import React from 'react'
import PropTypes from "prop-types";
import './OptionBox.css'
import LocationIcon from '../../../Pics/Icons/Icons/24px/Location.svg'
import Options from '../../../Pics/Icons/Icons/16px/Options.svg'
import Bag from '../../../Pics/Icons/Icons/24px/Shopping-bag.svg'
import Coupon from '../../../Pics/Icons/Icons/24px/Coupon.svg'


export const OptionBox = ({
  TextMain = 'San Francisco, California',
  Icon = { LocationIcon },
}) => {
  return (


    <div>
      <div className="Container">
        <div className="FirstIcon">
          <img src={Icon} alt="Location Icon" />
        </div>
        <div className="TextOption">
          <div className="InerBoxText">{TextMain}</div>
        </div>
        <div className="Options">
          <img src={Options} alt="Options" />
        </div>

      </div>
    </div>

  );
};



OptionBox.propTypes = {
  loc: PropTypes.string,
  Icon: PropTypes.string
};

export default OptionBox