import React from 'react'
import PropTypes from "prop-types";
import './UpcomingOrder.modules.css'
import clock from '../../../../Pics/Icons/Icons/24px/Clock.svg'
import BtnPrimary from '../../../Buttons/Primarybtns/BtnPrimary';
import { ProgressBar } from '../../../ProgressBar/ProgressBar';
export const UpcomingOrderCard = ({
  RestName = 'Burger King',
  OrderNumber = '#1DF90E',
  Timer = '35',


}) => {



  const OpenTrack = () => {
    document.getElementById('mavi').style.display = "block";
    document.getElementById('Track').style.display = "flex";
  }
  return (
    <div className='MainUpcomingOrderCard'>

      {/* Title + OrderNumber */}
      <div className="UpcomingTitle">

        <div className="RestNamelabel">
          <div className="title">
            {RestName}
          </div>
        </div>
        <div className="Orderlabel">
          <div className="order-number">
            {OrderNumber}
          </div>
        </div>

      </div>

      {/* Estimated time + tracker  */}

      <div className="UpcomingTimer">


        {/* Timer Icon */}
        <div id="iconTime">
          <img src={clock} alt="clock" />
          <div id="ArivalTime">
            <div className="ArrivalTimeText">
              Estimated arrival
            </div>
            <div className="Time">
              {Timer} min
            </div>
          </div>
        </div>
        {/* Arival + Time*/}

        {/* Track Button */}

        <div id="TrackBtn" onClick={OpenTrack}>
          <BtnPrimary title="Track" />
        </div>

      </div>
      {/* Progress bar */}
      <div className="UpcomingProgress">
        <ProgressBar />

      </div>

    </div >
  );
};



UpcomingOrderCard.propTypes = {
  RestName: PropTypes.string,
};

export default UpcomingOrderCard





