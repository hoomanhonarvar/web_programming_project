import React from 'react'
import './SignupDets.css'
import User from '../../Pics/Icons/Icons/20px/Profile.svg'
import Mail from '../../Pics/Icons/Icons/20px/Mail.svg'
import Keyicon from '../../Pics/Icons/Icons/24px/Key.svg'
import HeadingBold from '../Labels/SignupLables/HeadingBold'
import BodyText from '../Labels/SignupLables/BodyText'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import FormLable from '../Labels/SignupLables/FormLable'
import AlreadyText from '../Labels/SignupLables/AlreadyText'
const SignupDets = () => {
  return (
    <div className='SignupForm'>

      <form>

        <fieldset>
          <HeadingBold title="Create an account" />
          <BodyText title="Plese create an account to continue using our service" />

          <div className="Boxofinputs">
          <div className="Input-signup">
            <div className="iconcontainer">
              <img className='iconSing' src={User} alt="user" />
            </div>
            <div className="field">
              <FormLable title="FULL NAME" />
              <input placeholder='Mark Clarke' className='forminp' type="text" /></div>
          </div>


          <div className="Input-signup">
            <div className="iconcontainer">
              <img className='iconSing' src={Mail} alt="user" />
            </div>
            <div className="field">
              <FormLable title="EMAIL" />
              <input placeholder='markclarke@gmail.com' className='forminp' type="email" name="emailadress" id="" />
            </div>
          </div>
          <div className="Input-signup">
            <div className="iconcontainer">
              <img className='iconSing' src={Keyicon} alt="user" />
            </div>
            <div className="field">
              <FormLable title="PASSWORD" />
              <input placeholder='********' type="password" name="password" id="" className="forminp" />
            </div>
          </div>
          </div>

          <BtnPrimary title="Create an account" />
          <AlreadyText title="Already have an account?" id="Sing in" />

        </fieldset>


      </form>
    </div>

  )
}

export default SignupDets;