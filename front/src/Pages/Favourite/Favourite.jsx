import React, { useEffect, useState } from 'react'
import './Favourite.css'
import Navbar from '../../components/Navbar/Navbar'
import UpdatePersonalInfo from '../../components/Cards/UpdatePersonalInfo/UpdatePersonalInfo'
import FavNav from '../../components/Navbar/FavoriteNav/FavNav'
import { Route, Routes, useLocation,useNavigate } from 'react-router-dom'
import RestFav from '../../components/Favs/RestFav/RestFav'
import DishFav from '../../components/Favs/DishFav/DishFav'
import SildeBar from '../../components/SildeBar/SildeBar'
import Silverware from './../../Pics/Icons/Icons/16px/Silverware.svg'
import RestaurantIcon from './../../Pics/Icons/Icons/16px/Restaurant.svg'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'
import RestaurantCardMd from '../../components/Cards/RestaurantCards/RestaurantCardMd'
import FoodCards from '../../components/Cards/FoodCards/FoodCards'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import useAuth from '../../hooks/useAuth'
const REST_LIKE_URL="restaurant/fav_list/"
const DISH_LIKE_URL="dish/fav_list/"
function Favourite() {
  const{auth}=useAuth();

  let base64 = require("base-64"); // install it before use from npm i base-64


  const email=localStorage.getItem('email');
  const pwd=localStorage.getItem('pwd')


  const config = {
    headers: { 'Content-Type': 'application/json' ,
    Authorization: "Basic " + base64.encode(email + ":" + pwd),
  },credentials: 'include',
  
};

  const [rest,Setrest]=useState();
  const [dishes,Setdish]=useState();
  



  useEffect(()=>{



    const getDishes=async()=>{
      try{
      const response=await axios.get(DISH_LIKE_URL,
        config      
      );
      console.log("response")
      console.log(response);
      Setdish(response.data);
    }
    catch(error){
      console.error(error);
    }}
  
  
  
  
  
    const getRestaurants =async()=>{
  
    try{
      const response=await axios.get(REST_LIKE_URL,
        config  
      );
      console.log(response);
    Setrest(response.data);
    
    }
    catch(error){
            console.error(error);
          }
    }

  getRestaurants();
  getDishes();
  console.log(dishes)
  console.log(rest)

  },[])

  
 
   
    
    
  const [display,setDisplay]=useState(false);

  const change_display=()=>{
    setDisplay(!display);
  }

  return (<div className='main_fav'>
    <SildeBar/>
    <div className='FavouritePage'>
      {/* sildeBar */}
      {/* MainPart
      // Restaurants
      // Dishes
      
      */}
      

     
      {/* <UpdatePersonalInfo/> */}
      <div className="FavoriteSectionNav">
      <Navbar />
      <div className='FavNavbar'>
      <div className="ItemTab">
        <button onClick={change_display}>
          <div className="ItemTabIcon">
            <img src={RestaurantIcon} alt="RestaurantIcon" />
          </div>

          <div className="ItemTabName">
            Restaurants
          </div>
        </button>
      </div>

      <div className="ItemTab">
       <button onClick={change_display}>

          <div className="ItemTabIcon">
            <img src={Silverware} alt="Silverware" />

          </div>

          <div className="ItemTabName">
            Dishes
          </div>
          </button>
      </div>
    </div>



        <div className="FavContainer">

          {display
          ?(<>{dishes!==undefined
            ?(<div className="RestaurantCols">
            {rest.slice(0,3).map((res,i)=>
                <RestaurantCardMd  key={i} RestName={res?.name}
                RestType={res?.type}
                RestCost='$$$'
                RestDist={res?.range_dist+"km"}
                RestID={String(res?.id)}
                RestRate={String(res?.rate)} />)}
          </div>)
            :<p>nothing to show</p>
          }</>)
          :(<>
            {rest!==undefined
              ?(<div className="RestaurantCols">
              {dishes.slice(0,3).map((dish,i)=>
                  <FoodCards  key={i} 
                  FoodRate = {String(dish?.rate)}
                  // FoodPhotoPath = {dish?.image}
                  FoodName = {dish?.title}
                  FoodDelivery = '0.99$ Delivery'
                  FoodLink = 'Chocolate Cheesecake'
                  FoodDescription={dish?.description}
                  FoodRest_id={dish?.rest_id}
                  FoodId={dish?.id}
                  />)}
            </div>)
              :<p>nothing to show</p>
            }</>
          )
          }



         
          
        </div>
      </div>  

    </div>
    </div>
  )
}

export default Favourite