import React from 'react'
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


function HomePage() {
  return (
    <div className='HomePage'>
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


          {/* Restaurants */}

          <div className="FeaturedRst">
            <div className="RestaurantCols">
              <RestaurantCardMd />
              <RestaurantCardMd RestName='Carrows Restaurant'
                RestType='Fish'
                RestCost='$$$'
                RestDist='0,3Km'
                RestRate='4,7' />
              <RestaurantCardMd RestName='Carrows Restaurant'
                RestType='Fish'
                RestCost='$$$'
                RestDist='0,3Km'
                RestRate='4,7'
                RestLink='CarrowsRestaurant' />

            </div>
            <div className="RestaurantCols">
              <RestaurantCardMd />
              <RestaurantCardMd RestName='Carrows Restaurant'
                RestType='Fish'
                RestCost='$$$'
                RestDist='0,3Km'
                RestRate='4,7' />
              <RestaurantCardMd RestName='Carrows Restaurant'
                RestType='Fish'
                RestCost='$$$'
                RestDist='0,3Km'
                RestRate='4,7' />
            </div>

          </div>

          {/* Asian Food */}

          <div className="AsianFood">
            <div className="Featured-restaurants-title">
              <HeadingBoldTwo title="Asian Food" />
              <BtnTeritary title="See all" />
            </div>
          </div>

          <div className="RestaurantCols">

            <FoodCards />
            <FoodCards />
            <FoodCards />
          </div>





        </div>



      </div>
    </div>
  )
}

export default HomePage