import React from 'react'
import './SignInDets'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import Mail from '../../Pics/Icons/Icons/20px/Mail.svg'
import Keyicon from '../../Pics/Icons/Icons/24px/Key.svg'
import HeadingBold from '../Labels/SignupLables/HeadingBold'
import BodyText from '../Labels/SignupLables/BodyText'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import FormLable from '../Labels/SignupLables/FormLable'
import BtnSecondary from '../Buttons/Secondarybtns/BtnSecondary'
import AlreadyText from '../Labels/SignupLables/AlreadyText'
import {Link,useNavigate,useLocation} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import axios from '../../api/axios'
import {useState,useEffect} from "react"
import { useRef ,Route} from 'react'
import AuthContext from '../../context/AuthProvider'
import useAuth from '../../hooks/useAuth'
import PersistLogin from '../PresistLogin/PersistLogin'

const LOGIN_URL="/user/Login/";

const SignupDets = () => {

  const { setAuth, persist, setPersist  } = useAuth();
  const emailRef=useRef();
  const errRef=useRef();
  const[errMsg,setErrMsg]=useState('');
  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

  const [email,setEmail]=useState('');
  const[pwd,setPwd]=useState('');

  // const [email_store, setEmail_store] = useLocalStorage("email", "");
  // const [pwd_store, setPwd_store] = useLocalStorage("pwd", "");

  useEffect(()=>{
    emailRef.current.focus();
  },[])

  useEffect(()=>{
    setErrMsg('');
    
  },[email,pwd])


  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    
          try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password:pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                }
            );
        const accessToken = response.data?.tokens.access;
        const refreshToken=response.data?.tokens.refresh;

        console.log( accessToken);
        console.log(refreshToken)
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('email', email);
        localStorage.setItem('pwd',pwd);
        const roles=[2001,1984,5150];
        setAuth({email,pwd,roles,accessToken,refreshToken})
        setEmail('');
        setPwd('');
        console.log(from)
        
        navigate(from, { replace: true })
        

        // navigate("/",{replace: true})

        console.log(response.data);
        console.log(JSON.stringify(response));

    }
    catch(err){
        if (!err?.response) {
          setErrMsg('No Server Response');
        }
        else if(err.response?.status===400){
          setErrMsg('Missing Email or password');
        }

        else if(err.response?.status===401){
          setErrMsg('Unauthorized');
        }
        else{
          setErrMsg('Registeration Failed');
        }
        errRef.current.focus();
    }
  }

const togglePersist=()=>{
  setPersist(prev=>!prev);
}

useEffect(()=>{
  localStorage.setItem("persist",persist)
  

},[persist])

  return (
    <div className='SignupForm'>
      
      <form onSubmit={handleSubmit}>
      <div className=''>
      <section className='Msg'>
      <p ref={errRef} className={errMsg? "errmsg":"offscreen"} aria-live='assertive'>
        {errMsg}
      </p>
      </section>
      </div>
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
               onChange={(e)=>setEmail(e.target.value)
                          
              }
               required

               ref={emailRef}
               value={email}
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
              value={pwd}
              />
            </div>
            
          </div>
          </div>

          <BtnSecondary title="Sign in" />
          <AlreadyText title="Forgot password?"  Link="/forgetpass"/>
          <Link to="/sign-up">
          <BtnPrimary title="Create an account" /></Link>
          <div className="persistCheck">
                    <input
                        type="checkbox"
                        id="persist"
                        onChange={togglePersist}
                        checked={persist}
                    />
                    <label htmlFor="persist">Trust This Device</label>
                </div>

         

        </fieldset>


      </form>
    </div>

  )
}

export default SignupDets;