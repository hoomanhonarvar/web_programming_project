import React from 'react'
import './ForgetPassDets.css'
import Mail from '../../Pics/Icons/Icons/20px/Mail.svg'
import HeadingBold from '../Labels/SignupLables/HeadingBold'
import BodyText from '../Labels/SignupLables/BodyText'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import FormLable from '../Labels/SignupLables/FormLable'
import AlreadyText from '../Labels/SignupLables/AlreadyText'
import useAuth from '../../hooks/useAuth'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from '../../api/axios'
import { useEffect,useState,useRef } from 'react'


const URL='/user/request-reset-email/'
const redirect_URL='http://localhost:3000/setNewPass'

const ForgetPassDets = () => {
  const { setAuth  } = useAuth();
  const emailRef=useRef();
  const errRef=useRef();
  const[errMsg,setErrMsg]=useState('');
  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

  const [email,setEmail]=useState('');
  const[pwd,setPwd]=useState('');

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
            const response = await axios.post(URL,
                JSON.stringify({ email, redirect_url:redirect_URL }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                }
            );
        console.log(response)
        setAuth({email,pwd})
        setEmail('');
        setPwd('');

        //need a new page with timer for resend email
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
        else{
          setErrMsg('email sending Failed');
        }
        errRef.current.focus();
    }
  }

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
          <HeadingBold title="Forgot password?" />
          <BodyText title="Please enter your email address to continue" />

          <div className="Boxofinputs">
            <div className="Input-signup">
              <div className="iconcontainer">
                <img className='iconSing' src={Mail} alt="user" />
              </div>
              <div className="field">
                <FormLable title="EMAIL" />
                <input placeholder='markclarke@gmail.com' className='forminp' type="email" name="emailadress" id="" 
                onChange={(e)=>setEmail(e.target.value)}
                required
 
                ref={emailRef}
                value={email}
                />
              </div>
            </div>
          </div>

          <BtnPrimary title="Continue" />

        </fieldset>


      </form>
    </div>

  )
}

export default ForgetPassDets;