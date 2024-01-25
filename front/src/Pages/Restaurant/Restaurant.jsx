import './Restaurant.modules.css'
import PropTypes from "prop-types"
import Navbar from '../../components/Navbar/Navbar'
import RestInfoBox from '../../components/RestaurantInfo/RestInfoBox';
import RestBanner from '../../components/Banners/RestaruntBanner/RestBanner'
import SildeBar from '../../components/SildeBar/SildeBar';
import React,{ useState,useEffect } from 'react';
import axios from '../../api/axios';
import { useSearchParams } from 'react-router-dom';
import FoodCards from '../../components/Cards/FoodCards/FoodCards';
function RestaurantPage(){
  const [rest,setRest]=useState();
  const [queryParameters]=useSearchParams();
  const[dish,setDish]=useState();

  // useEffect=(()=>{
  //   const getRestaurant =async()=>{
  //     console.log("kiiirrr")
  //     console.log("/restaurant/"+queryParameters.get("id"))
      
  //     const response=await axios.get("/restaurant/"+queryParameters.get("id"))
  //     console.log(response);
  //     setRest(response.data);
  useEffect(()=>{
    console.log("salam")
    const getRest=async()=>{
      try{
    const response=await axios.get("/restaurant/"+queryParameters.get("id")+"/")

    console.log(response)
    setRest(response.data);
  }
    catch(err){
        console.error(err)
    }}

    const getDishes=async()=>{
      try{
        const response1=await axios.get("/restaurant/"+queryParameters.get("id")+"/dish/")
        console.log(response1)
        setDish(response1.data);
      }
      catch(err){
        console.log(err)
      }
    }
    getRest();
    getDishes();
    console.log(rest)
  },[])

   
  //   }
  //   getRestaurant();
  // },[])






  return (
    <div className='Rest_side'>
            <SildeBar/>

    <div className='RestCardMainCont'>
      <div className="MainRestaurantScreen">
        
        <Navbar />


        {/* Banner */}
        <RestBanner/>

        {/* Information */}
        <RestInfoBox 
        RestName={rest?.name}
        RestRate={rest?.rate}
        RestType={rest?.type}
        RestCost={rest?.name}
        RestDist={rest?.range_dist}
        RestDelivery={rest?.delivery}
        RestID={rest?.id}
        RestCoupon={rest?.offer}
        RestWorkTime={"Opens at "+rest?.opening_time+" pm"}
        RestAddress={rest?.name}
        RestDescription={rest?.description}/>

        {/* Menu */}


        {/* FoodCards Rows */}
        {dish?.length
            ? <div className="FeaturedRst">
            <div className="RestaurantCols">
              {dish.slice(0,3).map((dish,i)=>
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
                  
            </div>
            <div className="RestaurantCols">
              {dish.slice(3,6).map((dish,i)=>
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
                  
            </div>
            <div className="RestaurantCols">
              {dish.slice(6,9).map((dish,i)=>
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
                  
            </div>
            <div className="RestaurantCols">
              {dish.slice(9,12).map((dish,i)=>
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
                  
            </div>
            </div>
            
            
            :<p>No dish to display</p>
            }

      </div>
    </div>
    </div>
  );
};



export default RestaurantPage;

