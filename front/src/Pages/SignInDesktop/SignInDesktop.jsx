import React from 'react'
import './SignInD.css'
import SignIMG from '../../components/SignIMG/SignIMG'
import SignupDets from '../../components/SignUpDets/SignupDets'
import SignInDets from '../../components/SignInDets/SignInDets'


function SignInDesktop() {
  return (

    <div className='main-signup'>
      <SignIMG />
      <SignInDets />
    </div>
  )
}

export default SignInDesktop