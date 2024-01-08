import React from 'react'
import SignupDets from '../../components/SignUpDets/SignupDets'
import SignIMG from '../../components/SignIMG/SignIMG'
import './SignUpD.css'
const SignUpDesktop = () => {
  return (
    <div className='main-signup'>
      <SignIMG/>
      <SignupDets/>
    </div>
  )
}

export default SignUpDesktop;