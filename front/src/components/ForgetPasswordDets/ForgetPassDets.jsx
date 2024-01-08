import React from 'react'
import './ForgetPassDets.css'
import Mail from '../../Pics/Icons/Icons/20px/Mail.svg'
import HeadingBold from '../Labels/SignupLables/HeadingBold'
import BodyText from '../Labels/SignupLables/BodyText'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import FormLable from '../Labels/SignupLables/FormLable'
import AlreadyText from '../Labels/SignupLables/AlreadyText'
const ForgetPassDets = () => {
  return (
    <div className='SignupForm'>

      <form>

        <fieldset>
          <HeadingBold title="Forgot password?" />
          <BodyText title="Please enter your email address to continue" />

          <div className="Boxofinputs">
            <div className="Input-signup">
              <div className="iconcontainer">
                <img className='iconSing' src={Mail} alt="user" />
              </div>
              <div className="field">
                <FormLable title="EMAIL" />
                <input placeholder='markclarke@gmail.com' className='forminp' type="email" name="emailadress" id="" />
              </div>
            </div>
          </div>

          <BtnPrimary title="Continue" />

        </fieldset>


      </form>
    </div>

  )
}

export default ForgetPassDets;