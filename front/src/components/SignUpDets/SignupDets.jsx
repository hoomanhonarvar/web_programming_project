import React from 'react'
import './SignupDets.css'
import {useRef,useState,useEffect} from "react"
import User from '../../Pics/Icons/Icons/20px/Profile.svg'
import Mail from '../../Pics/Icons/Icons/20px/Mail.svg'
import Keyicon from '../../Pics/Icons/Icons/24px/Key.svg'
import HeadingBold from '../Labels/SignupLables/HeadingBold'
import BodyText from '../Labels/SignupLables/BodyText'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import FormLable from '../Labels/SignupLables/FormLable'
import AlreadyText from '../Labels/SignupLables/AlreadyText'
import axios from '../../api/axios'
import {Link} from 'react-router-dom'

const REGISTER_URL="/user/register/";
const SignupDets = () => {
  const emailRef=useRef();
  const errRef=useRef();
  const nameRef=useRef();

  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const[pwd,setPwd]=useState('');

  const[errMsg,setErrMsg]=useState('');
  const[success,setSuccess]=useState(false);

  useEffect(()=>{
    setErrMsg('');
    
  },[email,pwd])

  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    try{
      const response=await axios.post(REGISTER_URL,
        JSON.stringify({email: email,username: name,password: pwd}),
          {
            headers:{
              'Content-Type':'application/json'
            }
          }
          );
        
        console.log(response.data);
        console.log(JSON.stringify(response));
        setSuccess(true);
    }
    catch(err){
        if (!err?.response) {
          setErrMsg('No Server Response');
        }
        else if(err.response?.status===409){
          setErrMsg('Email Taken');
        }
        else{
          setErrMsg('Registeration Failed');
        }
        errRef.current.focus();
    }
  }

  return (
    <div className='SignupForm'>
      
      <form onSubmit={handleSubmit}>
      <div className=''>
      {success ? (<section className='Msg'>
        <h1>Succuss!</h1>
        <p>
          <a href="#">sign in</a>
        </p>
      </section>):(<section className='Msg'>
      <p ref={errRef} className={errMsg? "errmsg":"offscreen"} aria-live='assertive'>
        {errMsg}
      </p>
      </section>)}</div>
        <fieldset>
          <HeadingBold title="Create an account" />
          <BodyText title="Plese create an account to continue using our service" />

          <div className="Boxofinputs">
          <div className="Input-signup">
            <div className="iconcontainer">
              <img className='iconSing' src={User} alt="user" />
            </div>
            <div className="field">
              <FormLable title="FULL NAME" />
              <input placeholder='Mark Clarke' className='forminp' type="text"
               ref={nameRef} autoComplete="off"
               onChange={(e)=>setName(e.target.value)}
               required
              //  onFocus={()=>setNameFocus(true)}
              //  onBlur={()=>setNameFocus(false)}
              /></div>
          </div>


          <div className="Input-signup">
            <div className="iconcontainer">
              <img className='iconSing' src={Mail} alt="user" />
            </div>
            <div className="field">
              <FormLable title="EMAIL" />
              <input placeholder='markclarke@gmail.com' className='forminp' type="email" name="emailadress" id="email"
               onChange={(e)=>setEmail(e.target.value)}
               required
              //  onFocus={()=>setEmailFocus(true)}
              //  onBlur={()=>setEmailFocus(false)}
              />
            </div>
          </div>
          <div className="Input-signup">
            <div className="iconcontainer">
              <img className='iconSing' src={Keyicon} alt="user" />
            </div>
            <div className="field">
              <FormLable title="PASSWORD" />
              <input placeholder='********' type="password" name="password" id="" className="forminp" 
              onChange={(e)=>setPwd(e.target.value)}
              required
              // onFocus={()=>setPwdFocus(true)}
              // onBlur={setPwdFocus(false)}
              />
            </div>
          </div>
          </div>
          
          <BtnPrimary title="Sign Up"/>
          
          <AlreadyText title="Already have an account?" id="Sing in" Link="/sign-in"/>

        </fieldset>


      </form>
    </div>

  )
}

export default SignupDets;