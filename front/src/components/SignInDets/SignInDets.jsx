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
import axios from '../../api/axios'
import {useRef,useState,useEffect} from "react"

const LOGIN_URL="/user/Login/";

const SignupDets = () => {
  const emailRef=useRef();
  const errRef=useRef();
  const[errMsg,setErrMsg]=useState('');
  const[success,setSuccess]=useState(false);

  const [email,setEmail]=useState('');
  const[pwd,setPwd]=useState('');

  useEffect(()=>{
    setErrMsg('');
    
  },[email,pwd])


  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    try{
      const response=await axios.post(LOGIN_URL,
        JSON.stringify({email: email,password: pwd}),
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
        else if(err.response?.status===401){
          setErrMsg('wrong password');
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
      {/* <div className=''>
      {success ? (<section className='Msg'>
        <h1>Succuss!</h1>
        <p>
          <a href="#">sign in</a>
        </p>
      </section>):(<section className='Msg'>
      <p ref={errRef} className={errMsg? "errmsg":"offscreen"} aria-live='assertive'>
        {errMsg}
      </p>
      </section>)}</div> */}
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
              <input placeholder='markclarke@gmail.com' className='forminp' type="email" name="emailadress" id="" 
               onChange={(e)=>setEmail(e.target.value)}
               required
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
              />
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