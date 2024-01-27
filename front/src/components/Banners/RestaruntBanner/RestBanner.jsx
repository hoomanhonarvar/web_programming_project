import './RestBanner.modules.css'
import React, { useEffect } from 'react'
import PropTypes from "prop-types"
import RestLogoPath from '../../../Pics/Logo/Cards/RsLogo.svg'
import { Link } from 'react-router-dom'
import RestCoverPhoto from '../../../Pics/BannerPhotos/Cover.png'
import HeartButton from '../../Buttons/HeartButton/HeartButton'
import axios from '../../../api/axios'
import { useState } from 'react'
export const RestBanner = ({

  RestLogo = RestLogoPath,
  RestCover = RestCoverPhoto,
  RestID=0

}) => {
  let base64 = require("base-64"); 
  const email=localStorage.getItem('email');
  const pwd=localStorage.getItem('pwd')
  const LIKE_REST_URL="/restaurant/like/"
  const LIKE_DISLIKE_URL="/restaurant/likedislike/"

  const [red_heart,Set_read_heart]=useState(true);




  const config = {
    headers: { 'Content-Type': 'application/json' ,
    Authorization: "Basic " + base64.encode(email + ":" + pwd),
  },credentials: 'include',
};
  const like=async()=>{
    try{
    const response=await axios.get(LIKE_REST_URL+RestID+"/",
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

      const response=await axios.get(LIKE_DISLIKE_URL+RestID+"/",
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
    <div className="box">
      <div className="banner">
        <div className="overlap-group">
          <div className="CoverImage" onClick={like}>
          <HeartButton className="icons-icon-fill-px" red={red_heart}/>

          </div>
          <img className="RestLogoMain" alt="Logo" src={RestLogo} />
         
        </div>
      </div>
    </div>
  );
};

RestBanner.propTypes = {
  RestLogoPath: PropTypes.object,
  RestCover: PropTypes.object

};






export default RestBanner