import PropTypes from "prop-types";
import React from "react";
import Fire from "../../Pics/Icons/Icons/24px/Fire.svg"
import Delivery from "../../Pics/Icons/Icons/24px/Delivery.svg"
import Wallet from "../../Pics/Icons/Icons/24px/Wallet.svg"
import Silverware from "../../Pics/Icons/Icons/24px/Silverware.svg"
import Restaurant from "../../Pics/Icons/Icons/24px/Restaurant.svg"
import Map from "../../Pics/Icons/Icons/24px/Map.svg"

import "./CategoryCard.css";

export const CardsCategoryCard = ({
    className,
    text = "286+ options",
    text1 = "Popular",
    iconsIconFill = Fire,
}) => {
    return (
        <div className={`cards-category-card ${className}`}>
          <div className="IconContainerCard">
            <img src={iconsIconFill} alt="Icons" className="Icon" />
          </div>
            <div className="text-content">
               
                <div className="title">{text1}</div>
                <div className="body-text">{text}</div>
            </div>
        </div>
    );
};

CardsCategoryCard.propTypes = {
    text: PropTypes.string,
    text1: PropTypes.string,
};


export default CardsCategoryCard