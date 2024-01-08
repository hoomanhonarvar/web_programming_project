import React from 'react'
import SignupDets from '../../components/SignUpDets/SignupDets'
import SignIMG from '../../components/SignIMG/SignIMG'
import './ForgetPass.css'
import ForgetPassDets from '../../components/ForgetPasswordDets/ForgetPassDets'
const SignUpDesktop = () => {
  return (
    <div className='main-signup'>
      <SignIMG/>
      <ForgetPassDets/>
    </div>
  )
}

export default SignUpDesktop;