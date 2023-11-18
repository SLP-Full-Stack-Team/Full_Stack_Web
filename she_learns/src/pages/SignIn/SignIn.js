import './SignIn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [user_name, setName] = useState("");
  const [user_pswd, setPswd] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const onSubmitLoginForm = async e =>
  {
    e.preventDefault();
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
        setErrorMessage(data.error || "An error occurred during user creation.");
      }


    }catch(err){
      console.error(err.message);
    }
    
  };
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
        <form className="si-form-input">
          <label>Password</label>
          <input 
            className="si-input-box" 
            type="text"
            value={user_pswd} onChange={e => setPswd(e.target.value)} required/>
        </form>
     
        <Link to='/main' className='btn si-submit-button ' onClick={e => onSubmitLoginForm(e)}>Sign In</Link>
       
        <div className="si-not-user-link">
          <p>Not a user?</p>
          <Link to ='/signup'>Create an Account</Link>
        </div>
        
        
      </body>
    </div>
  );
  }

export default SignIn;
