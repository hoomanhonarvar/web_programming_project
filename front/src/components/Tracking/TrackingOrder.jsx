import React from 'react'
import PropTypes from "prop-types"
import './Tracking.modules.css'
import Cross from '../../Pics/Icons/Icons/16px/Close.svg'
import clock from '../../Pics/Icons/Icons/24px/ClockOrange.svg'
import mapIcon from '../../Pics/Icons/Icons/24px/Map.svg'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import ProgressBar from '../ProgressBar/ProgressBar'
import TLIAc from '../ListItem/TrackingListItem/Accomplished/TLIAc'
import TLInAc from '../ListItem/TrackingListItem/NotAccomplished/TLInAc'
import ChatBoxIcon  from '../../Pics/Icons/Icons/CartIcons/Buttons/Secondary/Icon.svg'
export const TrackingOrder = ({
  EsTime = "35",
  Distance = "3.6",
  FoodPreprationTime = "12:32 am",
  FoodDistributionTime = "12:49 am"
}) => {

  const CloseTrack = () => {
    document.getElementById('Track').style.display = "none";
    document.getElementById('MeowMeow').style.display = "none";
  }

  return (
    <div className='TrackMainContainer' id='Track'>
      {/* Map */}

      <div className="MapSection">
        <button className='BtnBgCross' onClick={CloseTrack} >

          <img src={Cross} alt="Cross" />

        </button>

      </div>


      {/* EstimatedTime + Distance */}
      <div className="LowerPart">

        <div className="TimeDist">
          <div id="iconTime">
            <img src={clock} alt="clock" />
            <div id="ArivalTime">
              <div className="ArrivalTimeText">
                Estimated arrival
              </div>
              <div className="Time">
                {EsTime} min
              </div>
            </div>
          </div>


          <div id="iconTime">
            <img src={mapIcon} alt="Map" />
            <div id="ArivalTime">
              <div className="ArrivalTimeText">
                Distance
              </div>
              <div className="Time">
                {Distance} Km
              </div>
            </div>
          </div>

        </div>
        {/* ProgressBar */}

        <div className="ProgressBarSection">
          <ProgressBar />
        </div>
        {/* CheckList */}
        <div className="CheckList">
          <TLInAc />
          <TLIAc />
          <TLIAc />
        </div>


        {/* CheckOut */}
        <div className="TrackCheckOutSection">
          <button >
            <img src={ChatBoxIcon} alt="chat" />
          </button>
          <BtnPrimary title="Call to DeliveryMan" />
        </div>
      </div>
    </div >
  );
};

TrackingOrder.propTypes = {

};


export default TrackingOrder