import React from 'react'
import './SetNewPass.modules.css'
import SignIMG from '../../components/SignIMG/SignIMG'
import SignupDets from '../../components/SignUpDets/SignupDets'
import SetNewPassDets from '../../components/SetNewPassDets/SetNewPassDets'
function SetNewPass() {
  return (
    <div className='main-signup'>
      <SignIMG/>
    <SetNewPassDets/>
    </div>
  )
}

export default SetNewPass