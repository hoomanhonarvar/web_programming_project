import React from 'react'
import './Orders.css'
import Navbar from '../../components/Navbar/Navbar'
import HeadingBoldTwo from '../../components/Labels/SignupLables/HeadingBoldTwo'
import SildeBar from '../../components/SildeBar/SildeBar'
function Orders() {
  return (
    <div className='OrdersPage'>
      <SildeBar/>

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