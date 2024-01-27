import React from 'react'
import './UpdatePersonalInfo.modules.css'
import { Link } from 'react-router-dom'
import BtnPrimary from '../../Buttons/Primarybtns/BtnPrimary'
import HeadingBoldTwo from '../../Labels/SignupLables/HeadingBoldTwo'
import Settings from '../../../Pages/Settings/Settings'
import close from '../../../Pics/Icons/Icons/16px/Close.svg'
import SettingBodyText from '../../Labels/SettingLables/SettingBody'
import FormLable from '../../Labels/SignupLables/FormLable'
import UserBG from '../../../Pics/Icons/Icons/Bg-Icons/UserBgIcon.svg'
import MailBG from '../../../Pics/Icons/Icons/Bg-Icons/MailBgIcon.svg'
import PhoneBG from '../../../Pics/Icons/Icons/Bg-Icons/PhoneBgIcon.svg'
import avatar from '../../../Pics/Avatar/Image.svg'
import BtnSecondary from '../../Buttons/Secondarybtns/BtnSecondary'
function UpdatePersonalInfo() {

  const CloseUpdateInfo = () => {
    document.getElementById('PInfo').style.display = "none";
    document.getElementById('mavi').style.display = "none";
  }


  return (
    <div className='PInfoContainer' id='PInfo'>
      {/* title + Icon */}
      <div className="PersonalInfoTitle">
        <HeadingBoldTwo className="Title" title='Personal Information' />
        <button id="out_button"onClick={CloseUpdateInfo}>
          <img src={close} alt="out" />
        </button>
      </div>
      <div className="TitleOfBox">
        <SettingBodyText title='Profile image' />
      </div>

      {/* Profilepic uplodebtn Deletebtn */}

      <div className="ProfilePicSection">
        <div className="ProfileImg">
          <div className="Img">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="ProfileImageControlBtns">
            <BtnPrimary title="Upload" />
            <BtnSecondary title="Delete" />
          </div>
        </div>
      </div>

      {/* Profile dets */}
      <div className="TitleOfBox">
        <SettingBodyText title='Profile details' />
      </div>
      {/* Personal Info Box */}
      <div className="PInfoBox">
        <fieldset>

          <div className="BoxofinputsUpdate">

            <div className="Input-signup updateInfo">
              <div >
                <img className='bgIcon' src={UserBG} alt="user" />
              </div>
              <div className="field">
                <FormLable title="FULL NAME" />
                <input placeholder='Mark Clarke' className='forminp' type="email" name="emailadress" id="" />
              </div>
            </div>

            <div className="Input-signup updateInfo">
              <div >
                <img className='bgIcon' src={MailBG} alt="MAIL" />
              </div>
              <div className="field">
                <FormLable title="EMAIL ADDRESS" />
                <input placeholder='markclarke@gmail.com' className='forminp' type="email" name="emailadress" id="" />
              </div>
            </div>

            <div className="Input-signup updateInfo">
              <div >
                <img className='bgIcon' src={PhoneBG} alt="PHONE" />
              </div>
              <div className="field">
                <FormLable title="PHONE NUMBER" />
                <input placeholder='markclarke@gmail.com' className='forminp' type="email" name="emailadress" id="" />
              </div>
            </div>


          </div>
        </fieldset>
      </div>

      {/* Update Btn */}

      <BtnPrimary title='Update profile' />
    </div>
  )
}

export default UpdatePersonalInfo