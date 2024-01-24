import React from 'react'
import './SignInDets'
import Mail from '../../Pics/Icons/Icons/20px/Mail.svg'
import Keyicon from '../../Pics/Icons/Icons/24px/Key.svg'
import HeadingBold from '../Labels/SignupLables/HeadingBold'
import BodyText from '../Labels/SignupLables/BodyText'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import FormLable from '../Labels/SignupLables/FormLable'
import BtnSecondary from '../Buttons/Secondarybtns/BtnSecondary'
import AlreadyText from '../Labels/SignupLables/AlreadyText'
import {Link} from 'react-router-dom'

const SignupDets = () => {
  return (
    <div className='SignupForm'>

      <form>

        <fieldset>
          <HeadingBold title="Welcome!" />
          <BodyText title="Sign in to your account to continue" />

          <div className="Boxofinputs">
          <div className="Input-signup">
            <div className="iconcontainer">
              <img className='iconSing' src={Mail} alt="user" />
            </div>
            <div className="field">
              <FormLable title="EMAIL ADDRESS" />
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

          <BtnSecondary title="Sign in" />
          <AlreadyText title="Forgot password?"  Link="/forgetpass"/>
          <Link to="/sign-up">
          <BtnPrimary title="Create an account" /></Link>
     

         

        </fieldset>


      </form>
    </div>

  )
}

export default SignupDets;