import React from 'react'
import './Orders.css'
import SildeBar from '../../components/SildeBar/SildeBar'
import Navbar from '../../components/Navbar/Navbar'
import HeadingBoldTwo from '../../components/Labels/SignupLables/HeadingBoldTwo'

function Orders() {
  return (
    <div className='OrdersPage'>

      {/* MainOrder
      // Nav
      //UpComingOrder
      //PreviousOrders
      */}

      <div className="MainOrderScreen">
        {/* Nav */}
        <Navbar />
        {/* UpcomingOrders */}
        <div className="UpComingOrders">
          <div className="UpComingOrderTitle">
            <HeadingBoldTwo title="Upcoming orders" />
           
          </div>
        </div>


        {/* PreviousOrders */}
        <div className="PreviousOrders">
          <div className="PreviousOrdersTitle">
            <HeadingBoldTwo title="Previous orders" />
           
          </div>
        </div>


      </div>

    </div>
  )
}

export default Orders