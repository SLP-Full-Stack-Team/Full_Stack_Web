import './SignIn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [inputs, setInputs] = useState({});
  return (
    <div className="SignIn">
      <body className="SignIn-body">
        <h2>Sign In</h2>
        <form className="si-form-input">
          <label>Username</label>
          <input 
            className="si-input-box" 
            type="text"></input>
        </form>
        <form className="si-form-input">
          <label>Password</label>
          <input 
            className="si-input-box" 
            type="text"></input>
        </form>
     
        <Link to='/main' className='btn si-submit-button '>Sign In</Link>
       
        <div className="si-not-user-link">
          <p>Not a user?</p>
          <Link to ='/signup'>Create an Account</Link>
        </div>
        
        
      </body>
    </div>
  );
  }

export default SignIn;
