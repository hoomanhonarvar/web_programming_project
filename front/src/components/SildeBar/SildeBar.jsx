import React from 'react'
import './SildeBar.css'
import SildeBarNav from './SildeBarNav/SildeBarNav'
import LogoDark from '../../Pics/Logo/Logo/Dark.svg'
import SildebarProfile from '../sildebarprofile/SildebarProfile'
const SildeBar = () => {



  return (
    <div className='SlideBarContainer'>

<div className="UpperPart">
        {/* Looogoo dark */}

        <img src={LogoDark} alt="" className='LogoDark' />
      {/* nav */}
      <SildeBarNav />
</div>


      {/* Profile */}

      <SildebarProfile   />
      {/* Edit shavad */}

    </div>
  )
}

export default SildeBar