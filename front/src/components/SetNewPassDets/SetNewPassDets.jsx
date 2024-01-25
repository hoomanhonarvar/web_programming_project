import React, { useEffect, useState ,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import './SetNewPassDets.modules.css'
import Keyicon from '../../Pics/Icons/Icons/24px/Key.svg'
import HeadingBold, { HeadingBoldOne } from '../Labels/SignupLables/HeadingBoldOne'
import BodyText from '../Labels/SignupLables/BodyText'
import BtnPrimary from '../Buttons/Primarybtns/BtnPrimary'
import FormLable from '../Labels/SignupLables/FormLable'
import { useSearchParams } from 'react-router-dom'
import axios from '../../api/axios'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './../Buttons/Primarybtns/BtnPrimary.css'

const URL="/user/password-reset-complete/"

function SetNewPassDets() {
const [pwd,setPwd]=useState('');
const [matchPwd,setMatchPwd]=useState('');
const [matchFocus, setMatchFocus] = useState(false);
const [validMatchPwd,setValidMatchPwd]=useState(false);
const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);
const [pwdFocus, setPwdFocus] = useState(false);
const errRef = useRef();
const [queryParameters]=useSearchParams();
const navigate = useNavigate();




useEffect(()=>{
  setValidMatchPwd(pwd===matchPwd);
},[pwd,matchPwd])

const validationCheck=()=>{
  if(queryParameters.get("toekn_valid")!=="True"){
    console.log("token_validation:false")
    navigate('/');
  }
}
useEffect(()=>{
  setErrMsg('');

},[pwd,matchPwd])


const handleSubmit = async (e) => {
  e.preventDefault();
  validationCheck();
  try {
      const response = await axios.patch(URL,
          JSON.stringify({  password:pwd 
                            ,
                            token:queryParameters.get("token"),
                            uidb64:queryParameters.get("uidb64")
          }),
          {
              headers: { 'Content-Type': 'application/json' ,},
              credentials: 'include'
            }
      );  
      console.log(response)
      
      setSuccess(true);
      
      setPwd('');
      setMatchPwd('');
      setValidMatchPwd(false);
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else {
          setErrMsg('proccess Failed')
      }
      errRef.current.focus();
  }
}

  return (
    <>
    {success ?(
      <section>
        <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
      </section>
    ):(

    
    <section>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    <div className='SignupForm'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="TitlesDets">
            <HeadingBoldOne title="Set a new password" />
            <BodyText title="Plese enter your new password and confirm it" />
          </div>
          <div className="Boxofinputs">
            <div className="Input-signup">
              <div className="iconcontainer">
                <img className='iconSing' src={Keyicon} alt="user" />
              </div>
              <div className="field">
                <FormLable title="NEW PASSWORD" />
                <input placeholder='' className='forminp' type="password" id="password"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                
                
                /></div>
            </div>
            <div className="Input-signup">
              <div className="iconcontainer">
                <img className='iconSing' src={Keyicon} alt="user" />
              </div>
              <div className="field">
                {/* <FormLable title="CONFIRM PASSWORD" /> */}
                <label htmlFor="confirm_pwd" id='confirm_pwd'>
                <FormLable title="Confirm Password:" /> 
                {validMatchPwd
                ?<FontAwesomeIcon icon={faCheck} className= "hide" />
                :<FontAwesomeIcon icon={faTimes} className="invalid" />

              }
                            
                </label>
                <input placeholder='' className='forminp' type="password" name="emailadress" id="confirm_pwd" 
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatchPwd ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                />
              </div>
            </div>
          </div>
          <div className='buttons-primary'>
          <button type="submit"className='btnP' disabled={validMatchPwd ? false:true}>Reset Password</button>
          </div>
         
        </fieldset>


      </form>
    </div>
    </section>
    )}
    </>
  )
}

export default SetNewPassDets