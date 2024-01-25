import PropTypes from "prop-types";
import React from "react";
import PopularFire from "../../Pics/Icons/Icons/Category/PopularCat.svg"
import Delivery from "../../Pics/Icons/Icons/24px/Delivery.svg"
import Wallet from "../../Pics/Icons/Icons/24px/Wallet.svg"
import Silverware from "../../Pics/Icons/Icons/24px/Silverware.svg"
import Restaurant from "../../Pics/Icons/Icons/24px/Restaurant.svg"
import Map from "../../Pics/Icons/Icons/24px/Map.svg"
import { Link } from "react-router-dom";
import "./CategoryCard.css";

export const CardsCategoryCard = ({
    className,
    text = "286+ options",
    text1 = "Popular",
    iconsIconFill = PopularFire,
    LinkText = "Popular"
}) => {
    return (
        <div className={`cards-category-card ${className}`}>

            <Link to={LinkText}>
                <div className="IconContainerCard">
                    <img src={iconsIconFill} alt="Icons" className="Icon" />
                </div>
                <div className="text-content">

                    <div className="title">{text1}</div>
                    <div className="body-text">{text}</div>
                </div>
            </Link>

        </div>
    );
};

CardsCategoryCard.propTypes = {
    text: PropTypes.string,
    text1: PropTypes.string,
    LinkText: PropTypes.string,
    iconsIconFill : PropTypes.object
};


export default CardsCategoryCard