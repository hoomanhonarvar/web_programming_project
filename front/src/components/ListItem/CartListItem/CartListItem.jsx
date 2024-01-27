import React from "react";
import './CartListItem.css'
import Bin from '../../../Pics/Icons/Icons/CartIcons/Icons/Icon-fill/48px/20px-icon-inside.png'
import FoodPic from '../../../Pics/ListItemPhoto/Image.png'
import PropTypes from "prop-types"

export const CartListItem = ({
 FoodPhoto = FoodPic,
 FoodQuantity = "1",
 DishName="Peperoni Pie",
 DishFee="$23" /*fee*/
}) => {
  return (
    <div className="MainCartListItem">
      {/* Food Photo */}
      <div className="FoodPhotoSection">
        <img src={FoodPhoto} alt="FoodPhoto" />
      </div>
      {/* Food Quantity */}
      <div className="FoodQauntity">
        {FoodQuantity} x
      </div>
      {/* Detail & Price */}
      <div className="NameFee">
        <div className="DishName">{DishName}</div>
        <div className="DishFee">{DishFee}</div>
      </div>


      {/* Bin:0 */}
      <div className="DeletFoodSection">
        <button>
          <img src={Bin} alt="Bin" />
        </button>
      </div>
    </div>
  );
};

CartListItem.prototype={
FoodPhoto: PropTypes.string,
};