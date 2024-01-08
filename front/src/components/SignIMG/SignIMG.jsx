import React from 'react'
import './SignIMG.css'
import signupphoto from '../../Pics/Image.png'
import logo from '../../Pics/Logo/Logo/Light.svg'
const SignIMG = () => {
  return (
    <div className='mainbox'>
     <div className="signupimg">  
     <img src={logo} alt="logo" />
     </div>
      {/* <img className='Signuppic' src={signupphoto} alt="Signuppic" /> */}
    </div>
  )
}

export default SignIMG