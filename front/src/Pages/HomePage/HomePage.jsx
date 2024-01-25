import React, { useEffect, useState } from 'react'
import './HomePage.css'
import BtnTeritary from '../../components/Buttons/Teritarybtns/BtnTeritary'
import HeadingBoldTwo from '../../components/Labels/SignupLables/HeadingBoldTwo'
import CardsCategoryCard from '../../components/Cards/CategoryCard'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PopCat from '../../Pics/Icons/Icons/Category/PopularCat.svg'
import DelCat from '../../Pics/Icons/Icons/Category/DeliveryCat.svg'
import HcCat from '../../Pics/Icons/Icons/Category/WalletCat.svg'
import DnCat from '../../Pics/Icons/Icons/Category/DineInCat.svg'
import RstCat from '../../Pics/Icons/Icons/Category/RestaurantCat.svg'
import MapCat from '../../Pics/Icons/Icons/Category/MapCat.svg'
import RestaurantCardMd from '../../components/Cards/RestaurantCards/RestaurantCardMd'
import FoodCards from '../../components/Cards/FoodCards/FoodCards'
import SildeBar from '../../components/SildeBar/SildeBar'
import useAxiosPrivate from "./../../hooks/useAxiosPrivate"
import axios from '../../api/axios'

  

function HomePage() {
  const [rest,Setrest]=useState();
  const [dishes,Setdish]=useState();
  useEffect(()=>{
  const getRestaurants =async()=>{

  try{
  const response=await axios.get('/restaurant/all/')
  console.log(response);
  Setrest(response.data);

}
    catch(err){
      console.error(err);
    }
}
const getDishes=async()=>{
  const response1=await axios.get('/dish/all/')
  console.log(response1);
  Setdish(response1.data);
}
getRestaurants();
getDishes();
},[])
  

  return (
    <div className='HomePage'>
      <SildeBar/>
      <div className="MainHomeScreen">
        {/* NavBarDesktop */}
        <Navbar />
        {/* Categories */}
        <div className="Categories">
          <div className="CategoryTitle">
            <HeadingBoldTwo title="Explore categories" />
            <BtnTeritary title="See all" />
          </div>
          {/* Cards */}
          <div className="Cards">
            <CardsCategoryCard
              className="cards-category-card-instance"
              // iconsIconFill={<IconsDelivery className="icons-px-delivery" icon="icon-3.svg" />}
              // iconsIconFillIconsIconFillClassName="design-component-instance-node"
              text1="Popular"
              text="286+ options"
              LinkText='/popular'
              iconsIconFill={PopCat}

            />
            <CardsCategoryCard
              className="cards-category-card-instance"
              // iconsIconFill={<IconsDelivery className="icons-px-delivery" icon="icon-3.svg" />}
              // iconsIconFillIconsIconFillClassName="design-component-instance-node"
              text="1,843+ options"
              text1="Fast delivery"
              LinkText='/fastdelivery'
              iconsIconFill={DelCat}

            />
            <CardsCategoryCard
              className="cards-category-card-instance"
              // iconsIconFill={<IconsDelivery className="icons-px-delivery" icon="icon-3.svg" />}
              // iconsIconFillIconsIconFillClassName="design-component-instance-node"
              text="25+ options"
              text1="High class"
              iconsIconFill={HcCat}

            />
            <CardsCategoryCard
              className="cards-category-card-instance"
              // iconsIconFill={<IconsDelivery className="icons-px-delivery" icon="icon-3.svg" />}
              // iconsIconFillIconsIconFillClassName="design-component-instance-node"
              text="182+ options"
              text1="Dine in"
              iconsIconFill={DnCat}
            />
            <CardsCategoryCard
              className="cards-category-card-instance"
              // iconsIconFill={<IconsDelivery className="icons-px-delivery" icon="icon-3.svg" />}
              // iconsIconFillIconsIconFillClassName="design-component-instance-node"
              text="3,548+ options"
              text1="Pick up"
              iconsIconFill={RstCat}
            />
            <CardsCategoryCard
              className="cards-category-card-instance"
              // iconsIconFill={<IconsDelivery className="icons-px-delivery" icon="icon-3.svg" />}
              // iconsIconFillIconsIconFillClassName="design-component-instance-node"
              text="44+ options"
              text1="Nearest"
              iconsIconFill={MapCat}
            />
          </div>



        </div>


        {/* Categories */}

        <div className="Featured-restaurants">
          <div className="Featured-restaurants-title">
            <HeadingBoldTwo title="Featured restaurants" />
            <BtnTeritary title="See all" />
          </div>


          
                
            

            {rest?.length
            ? <div className="FeaturedRst">
            <div className="RestaurantCols">
              {rest.slice(0,3).map((res,i)=>
                  <RestaurantCardMd  key={i} RestName={res?.name}
                  RestType={res?.type}
                  RestCost='$$$'
                  RestDist={res?.range_dist+"km"}
                  RestID={String(res?.id)}
                  RestRate={String(res?.rate)} />)}
            </div>
            <div className='RestaurantCols'>
            {rest.slice(3,6).map((res,i)=>
                  <RestaurantCardMd  key={i} RestName={res?.name}
                  RestType={res?.type}
                  RestCost='$$$'
                  RestDist={res?.range_dist+"km"}
                  RestID={String(res?.id)}
                  RestRate= {String(res?.rate)} />)}
            </div>
            </div>
            :<p>No restaurant to display</p>
            }


            


          {/* Asian Food */}

          <div className="AsianFood">
            <div className="Featured-restaurants-title">
              <HeadingBoldTwo title="Asian Food" />
              <BtnTeritary title="See all" />
            </div>
          </div>

          {dishes?.length
            ? 
            <div className="RestaurantCols">
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
            </div>
            
            :<p>No dish to display</p>
            }
          

            {/* <FoodCards />
            <FoodCards />
            <FoodCards /> */}





        </div>



      </div>
    </div>
  )
}

export default HomePage