import PropTypes from "prop-types"
import React, { useEffect } from 'react'

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
import axios from '../../../api/axios'
import { useState } from 'react'
export const FoodCards = ({
  RestDist = '0,3Km',
  FoodRate = '4,3',
  FoodType = 'Desserts',
  FoodPhotoPath = FoodPhoto,
  FoodName = 'Chocolate Cheesecake',
  FoodPrepDuration = '15 - 25 min',
  FoodDelivery = '0.99$ Delivery',
  FoodLink = 'Chocolate Cheesecake',
  DishId

}) => {let base64 = require("base-64"); 
const email=localStorage.getItem('email');
const pwd=localStorage.getItem('pwd')
const LIKE_DISH_URL="/dish/like/"
const LIKE_DISLIKE_URL="/dish/likedislike/"
const ADD_TO_CART_URL="/dish/add-to-cart/"
const DEL_FROM_CART_URL="/dish/del-from-cart/"
const [red_heart,Set_read_heart]=useState(true);




const config = {
  headers: { 'Content-Type': 'application/json' ,
  Authorization: "Basic " + base64.encode(email + ":" + pwd),
},credentials: 'include',
};

const addToCart=async()=>{
  try{
    const response=await axios.get(ADD_TO_CART_URL+DishId+"/",
    config      
    
  );
  console.log(response)
  }catch(err){
    console.error(err)
  }
}
const delFromCart=async()=>{
  try{
    const response=await axios.get(DEL_FROM_CART_URL+DishId+"/",
    config      
  );
  console.log(response)

  }catch(err){
    console.error(err)
  }
}


const like=async()=>{
  try{
  const response=await axios.get(LIKE_DISH_URL+DishId+"/",
    config      
    
  );
  
  Set_read_heart(!red_heart);
  // console.log(red_heart)
}
catch(error){
  console.error(error);
}}
useEffect(()=>{

  const like_dislike=async()=>{
    try{

    const response=await axios.get(LIKE_DISLIKE_URL+DishId+"/",
      config      
      
    );
    Set_read_heart(true)
   }catch(err){
    Set_read_heart(false)
   }}

   like_dislike();
   console.log(red_heart)

   

   
})
  



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
              <div className="InfoRow" onClick={like}>
              <HeartButton className="likeBtn" red={red_heart}/>

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
                  <button className="CounterMinus" onClick={delFromCart} >
                    <img src={Minus} alt="Minus" />
                  </button>
                  
                  <button className="CounterPlus" onClick={addToCart}>
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
