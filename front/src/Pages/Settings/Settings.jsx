import React from 'react'
import './Settings.modules.css'
import Navbar from '../../components/Navbar/Navbar'
import HeadingBoldTwo from '../../components/Labels/SignupLables/HeadingBoldTwo'
import BodyText from '../../components/Labels/SignupLables/BodyText'
import SettingBodyText from '../../components/Labels/SettingLables/SettingBody'
import SettingCard from '../../components/Cards/SettingCards/SettingCard'
import User from '../../../src/Pics/Icons/Icons/Profile.svg'
import BookMark from '../../../src/Pics/Icons/Icons/Bookmark.svg'
import Mail from '../../Pics/Icons/Icons/Mail.svg'
import Wallet from '../../Pics/Icons/Icons/Wallet.svg'
import Card from '../../Pics/Icons/Icons/Card.svg'
import Support from '../../Pics/Icons/Icons/Support.svg'
import newProfile from '../../Pics/Icons/Icons/Split-order.svg'
import Money from '../../Pics/Icons/Icons/Money.svg'
import Cart from '../../components/Cart/Cart'
import SildeBar from '../../components/SildeBar/SildeBar'
import SildebarProfile from '../../components/sildebarprofile/SildebarProfile'
import UpdatePersonalInfo from '../../components/Cards/UpdatePersonalInfo/UpdatePersonalInfo'
function Settings() {
  const OpenInfoEdit = () => {
    document.getElementById('PInfo').style.display = "flex";
    document.getElementById('mavi').style.display="block";
  }
  return (
    <div className='main'>
                      {/* <SildebarProfile/> */}

                <div className='OverLay' id='mavi'></div>
                <Cart/>

            <SildeBar/>

    <div className='SettingsPage'>
      <div className="MainSettingsScreen">
        {/* Nav */}
        <Navbar />

        <div className="TitleBoxSetting">
          <HeadingBoldTwo title="Settings" />



        </div>

        {/* General Title */}

        <div className="SettingCatBox">


          <SettingBodyText title='General' />


          <div className="General">
          <div className="UserInfo" onClick={OpenInfoEdit}><SettingCard Icon={User} OptionText='Personal information' /></div>
            <SettingCard Icon={BookMark} OptionText='Saved addresses' />
            <SettingCard Icon={Mail} OptionText='Marketing preferences' />
          </div>

        </div>

        {/* Payment Title */}
        <div className="SettingCatBox">
          <SettingBodyText title='Payment' />



          <div className="Payment">
            <SettingCard Icon={Wallet} OptionText='Payment methods' />
            <SettingCard Icon={Card} OptionText='My cards' />

          </div>

        </div>
        {/* Other Title */}

        <div className="SettingCatBox">
          <SettingBodyText title='Other' />

          <SettingCard Icon={Support} OptionText='Support' />
          <SettingCard Icon={newProfile} OptionText='Invite a friend' />
          <SettingCard Icon={Money} OptionText='Discounts' />


        </div>
        

        <div className="Update" id='UpdateInfo'>
      <UpdatePersonalInfo/>
      </div>

      </div>
      
    </div>
    </div>
  )
}

export default Settings