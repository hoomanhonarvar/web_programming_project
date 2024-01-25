import React from 'react'
import PropTypes from "prop-types";
import './BtnIcon.css'
import LocationIcon from '../../../Pics/Icons/Icons/24px/Location.svg'
import Options from '../../../Pics/Icons/Icons/16px/Options.svg'
import Bag from '../../../Pics/Icons/Icons/24px/Shopping-bag.svg'
import Coupon from '../../../Pics/Icons/Icons/24px/Coupon.svg'
import Filter from '../../../Pics/Icons/Icons/20px/Filter.svg'


export const BtnIcon = ({
  Icon = { Filter },
  bgColor = '#503e9d'


}) => {
  return (

    <div style={{ backgroundColor: { bgColor } }} className="BtnBoxBg">
      <div className="BoxIcon">
        <img src={Icon} alt="Icon" />
      </div>
    </div>

  );
};



BtnIcon.propTypes = {
  Icon: PropTypes.string,
  bgColor: PropTypes.string
};

export default BtnIcon