import React from 'react'
import './Orders.css'
import Navbar from '../../components/Navbar/Navbar'
import HeadingBoldTwo from '../../components/Labels/SignupLables/HeadingBoldTwo'
import SildeBar from '../../components/SildeBar/SildeBar'
import UpcomingOrderCard from '../../components/Cards/OrderCards/UpcomingOrders/UpcomingOrder'
import PreviousOrder from '../../components/Cards/OrderCards/PreviousOrders/PreviousOrder'
import {useState,useEffect}from 'react';
import axios from '../../api/axios'
import Cart from '../../components/Cart/Cart'
import TrackingOrder from '../../components/Tracking/TrackingOrder'
import OrderDets from '../../components/PreviousOrderDetail/PreviousOrderDetail'
import Promopopup from '../../components/PopUp/PromoPopUp/Promopopup'
import AdCheck from '../../components/PopUp/AddressCheckPopUp/AdCheck'
const PERV_REQ_URL="cart/previous/"
const UPCOMING_REQ_URL="cart/up-coming/"
const CART_URL="cart/all/"
function Orders() {
  let base64 = require("base-64"); 
  const email=localStorage.getItem('email');
  const pwd=localStorage.getItem('pwd')
  const config = {
    headers: { 'Content-Type': 'application/json' ,
    Authorization: "Basic " + base64.encode(email + ":" + pwd),
  },credentials: 'include',
};
  const [Prev,setPrev]=useState();
  const [Upcoming,setUpcoming]=useState();
  const [cart,setCart]=useState();
  useEffect(()=>{
    const getCart=async()=>{
      try{
      const response=await axios.get(CART_URL,
        config      
      );
      
  
      setCart(response.data[0]);
      console.log(response)
      console.log(response.data[0])
      console.log(response.data[0])
      console.log(response.data[0])
      console.log(response.data[0])
      console.log(response.data[0])
      console.log(response.data[0])


    }
    catch(error){
      console.error(error);
    }}

  const getPrev=async()=>{
    try{
    const response=await axios.get(PERV_REQ_URL,
      config      
    );
    

    setPrev(response.data);
  }
  catch(error){
    console.error(error);
  }}
  const getUpcoming =async()=>{
    try{
      const response=await axios.get(UPCOMING_REQ_URL,
        config  
      );
      console.log(response);
    setUpcoming(response.data);
    
    }
    catch(error){
            console.error(error);
          }
    }
  getPrev();
  getUpcoming();
  getCart();
  // console.log(cart[0])
  },[])

  return (
    <div className='OrdersPage'>


      <SildeBar/>

      <div className="MainOrderScreen">
        {/* Nav */}
        <Navbar />
        {/* UpcomingOrders */}
        <div className="UpComingOrders">
          <div className="UpComingOrderTitle">
            <HeadingBoldTwo title="Upcoming orders" />
          </div>
          {Upcoming!==undefined

          ?<div className='UpComingOrders'>
            <div className="Orderrow">
            {Upcoming.slice(0,3).map((upcoming,i)=>
                <UpcomingOrderCard key={i} 
                RestName = {upcoming.rest_name}
                OrderNumber = {"#"+String(upcoming.id)}
                Timer = {String(upcoming.Estimated_arrival)} />)}
             </div>
             <div className="Orderrow">
            {Upcoming.slice(3,6).map((upcoming,i)=>
                <UpcomingOrderCard key={i} 
                RestName = {upcoming.rest_name}
                OrderNumber = {"#"+String(upcoming.id)}
                Timer = {String(upcoming.Estimated_arrival)} />)}
             </div>
      </div>
:<></>}
          
        </div>


        {/* PreviousOrders */}
        <div className="PreviousOrders">
          <div className="PreviousOrdersTitle">
            <HeadingBoldTwo title="Previous orders" />
          </div>
            

            {Prev!==undefined
            ?<div className='UpComingOrders'>
              <div className="Orderrow">    
              {Prev.slice(0,3).map((prev,i)=>
                <PreviousOrder key={i} 
                RestName = {prev.rest_name}
                OrderTime = {String(prev.time)}
                OrederDate = {String(prev.date)}
                Finish_cancle={prev.finish_cancle}
                dish_list={prev.dish_cart}
                />)}
            
                  </div>
                  </div>
            
               

            :<p>none</p>
            }

          

        </div>


      </div>
      <TrackingOrder />
      {/* <Promopopup /> */}
      <AdCheck />
      <OrderDets />
      {cart!==undefined
      ?<Cart   RestName={cart.rest_name}
      PromoCode={cart.PromoCode}
      dish_list={cart.dish_cart}
      dish_id={cart.id}
      />
      :<Cart/>
      }
      
            <div id='mavi' className='OverLay'></div>

    </div>
  )
}

export default Orders