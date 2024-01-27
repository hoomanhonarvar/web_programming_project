import React from 'react'
import PropTypes from "prop-types"
import './FoodCards.modules.css'
import FoodPhoto from '../../../Pics/FoodPhotos/ChocolateCake.png'
import Dine from '../../../Pics/Icons/Icons/16px/Silverware.svg'
import StareRate from '../../../Pics/Icons/Icons/16px/Star.svg'
import Delivery from '../../../Pics/Icons/Icons/16px/Delivery.svg'
import { DBadge } from '../../Badges/DeliveryBadge/DBadge'
import { Link } from 'react-router-dom'
import Add from '../../../Pics/Icons/Icons/16px/add-circle.svg'
import Minus from '../../../Pics/Icons/Icons/16px/minus-cirlce.svg'
import HeartButton from '../../Buttons/HeartButton/HeartButton'
export const FoodCards = ({
  RestDist = '0,3Km',
  FoodRate = '4,3',
  FoodType = 'Desserts',
  FoodPhotoPath = FoodPhoto,
  FoodName = 'Chocolate Cheesecake',
  FoodPrepDuration = '15 - 25 min',
  FoodDelivery = '0.99$ Delivery',
  FoodLink = 'Chocolate Cheesecake',
  Quantity = 0,

}) => {
  return (
    <div className='FoodCardMainContainer'>
        <div className="FoodPhoto">
          <img src={FoodPhotoPath} alt="FoodPhoto" />
        </div>
        <div className="FoodDets">
          <div className="FoodRow">
            <div className="InfoContainer">
              <div className="InfoRow">
                <div className="RestNameContainer">
                  <h3 className="RSname">{FoodName}</h3>
                </div>
              </div>
              <div className="InfoRow">
              <HeartButton className="likeBtn" />

                <DBadge title={FoodDelivery} />
              </div>

            </div>


            <div className="InfoContainerFood">

              <div className="InfoRowFood">
                <img className='InfoIcon' src={StareRate} alt="Star" />
                {FoodRate}
              </div>


              <div className="InfoRowFood">
                <img className='InfoIcon' src={Dine} alt="Dine" />
                {FoodType}
              </div>



              <div className="InfoRowFood">
                <img className='InfoIcon' src={Delivery} alt="Dine" />
                {FoodPrepDuration}
              </div>

              <div className="InfoRowFood">
                <div className="Counter">
                  <button className="CounterMinus">
                    <img src={Minus} alt="Minus" />
                  </button>
                  <div className="Quantity">
                    {Quantity}
                  </div>
                  <button className="CounterPlus">
                    <img src={Add} alt="Add" />
                  </button>

                </div>
              </div>


            </div>

          </div>

        </div>
    </div >
  );
};

FoodCards.propTypes = {
  RestDist: PropTypes.string,
  FoodRate: PropTypes.string,
  FoodType: PropTypes.string,
  FoodPhotoPath: PropTypes.object,
  FoodName: PropTypes.string,
  FoodDelivery: PropTypes.string,
  FoodLink: PropTypes.string
};



export default FoodCards
