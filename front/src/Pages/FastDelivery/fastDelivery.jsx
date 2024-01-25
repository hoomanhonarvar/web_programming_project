import React from 'react'
import './fastDelivery.modules.css'
import Navbar from '../../components/Navbar/Navbar'
import HeadingBoldTwo from '../../components/Labels/SignupLables/HeadingBoldTwo'
import FoodCards from '../../components/Cards/FoodCards/FoodCards'
function fastdelivery() {

  // Needs variables for passing data

  return (
    <div className='MainfastdeliveryScreen'>
      <Navbar />
      {/* Title */}

      <div className="FastDelTitle">
        <HeadingBoldTwo title="Fast delivery" />
      </div>

      {/* Rows */}

      <div className="FastDishes">
        <div className="FastDelRow">
          <FoodCards />
          <FoodCards />
          <FoodCards />

        </div>
        <div className="FastDelRow">
          <FoodCards />
          <FoodCards />
          <FoodCards />
        </div>
        <div className="FastDelRow">
          <FoodCards />
          <FoodCards />
          <FoodCards />
        </div>
      </div>
    </div>



  )
}

export default fastdelivery