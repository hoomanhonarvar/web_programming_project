import React from 'react'
import './SetNewPassDets.modules.css'
import Keyicon from '../../Pics/Icons/Icons/24px/Key.svg'
import HeadingBold, { HeadingBoldOne } from '../Labels/SignupLables/HeadingBoldOne'
import BodyText from '../Labels/SignupLables/BodyText'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import FormLable from '../Labels/SignupLables/FormLable'
function SetNewPassDets() {
  return (
    <div className='SignupForm'>
      <form>
        <fieldset>
          <div className="TitlesDets">
            <HeadingBoldOne title="Set a new password" />
            <BodyText title="Plese enter your new password and confirm it" />
          </div>
          <div className="Boxofinputs">
            <div className="Input-signup">
              <div className="iconcontainer">
                <img className='iconSing' src={Keyicon} alt="user" />
              </div>
              <div className="field">
                <FormLable title="NEW PASSWORD" />
                <input placeholder='' className='forminp' type="password" /></div>
            </div>
            <div className="Input-signup">
              <div className="iconcontainer">
                <img className='iconSing' src={Keyicon} alt="user" />
              </div>
              <div className="field">
                <FormLable title="CONFIRM PASSWORD" />
                <input placeholder='' className='forminp' type="password" name="emailadress" id="" />
              </div>
            </div>
          </div>
          <BtnPrimary title="Reset Password" />
        </fieldset>


      </form>
    </div>

  )
}

export default SetNewPassDets