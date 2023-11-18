import './SignIn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [user_name, setName] = useState("");
  const [user_pswd, setPswd] = useState("");
  const [show_pswd, setShowPswd] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");

  const onSubmitLoginForm = async (user_name, user_pswd) =>
  {
    try{
      const body = {user_name, user_pswd};
      const response = await fetch ("http://localhost:5002/users/:user_name", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      const data = await response.json();
      if(response.ok){
        console.log("LOGIN SUCCESS");
        window.location = "/Main";
      }else{
        setErrorMessage(data.ErrorMessage || "login_failed");
      }
    }catch(err){
      console.error(err.message);
    }
    
  };

  const onClickCheckBox = async e => {
    e.preventDefault();
    try{
      setShowPswd(!show_pswd);
    }catch(err){
      console.error(err.message);
    }
    
  }

  return (
    <div className="SignIn">
      <body className="SignIn-body">
        <h2>Sign In</h2>
        <form className="si-form-input">
          <label>Username</label>
          <input 
            className="si-input-box" 
            type="text"
            value={user_name} onChange={e => setName(e.target.value)} required/>
            {ErrorMessage && <p className="error-message">{ErrorMessage}</p>}
        </form>

        <form className="cu-form-input">
          <label>Password</label>
          <input className="cu-input-box" type={show_pswd ? 'text' : 'password'}
                 value={user_pswd} onChange={e => setPswd(e.target.value)} required/>
            <div className="cu-show-pswd" >
                <input  type="checkbox" onClick={e => onClickCheckBox(e)}/>
                <p className="cu-checkbox-txt">Show Password</p>
            </div>
        </form>
     
        <Link to='/main' className='btn si-submit-button' onClick={e => onSubmitLoginForm(e)}>Sign In</Link>
       
        <div className="si-not-user-link">
          <p>Not a user?</p>
          <Link to ='/signup'>Create an Account</Link>
        </div>
        
        
      </body>
    </div>
  );
  }

export default SignIn;
