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
const PERV_REQ_URL="cart/previous/"
const UPCOMING_REQ_URL="cart/up-coming/"

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
  useEffect(()=>{

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
  },[])

  return (
    <div className='OrdersPage'>
      <div className='OverLay'><Cart/></div>
      <Cart/>


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

    </div>
  )
}

export default Orders