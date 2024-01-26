import React from 'react'
import './Orders.css'
import Navbar from '../../components/Navbar/Navbar'
import HeadingBoldTwo from '../../components/Labels/SignupLables/HeadingBoldTwo'
import SildeBar from '../../components/SildeBar/SildeBar'
import UpcomingOrderCard from '../../components/Cards/OrderCards/UpcomingOrders/UpcomingOrder'
import PreviousOrder from '../../components/Cards/OrderCards/PreviousOrders/PreviousOrder'


function Orders() {
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
          <div className="Orderrow">
            <UpcomingOrderCard />
            <UpcomingOrderCard Timer='60'
              OrderNumber='#3E0AQ9' />
          </div>
        </div>


        {/* PreviousOrders */}
        <div className="PreviousOrders">
          <div className="PreviousOrdersTitle">
            <HeadingBoldTwo title="Previous orders" />
          </div>
          <div className="Orderrow">
          <PreviousOrder/>
          <PreviousOrder/>
          <PreviousOrder/>

          </div>
        </div>


      </div>

    </div>
  )
}

export default Orders