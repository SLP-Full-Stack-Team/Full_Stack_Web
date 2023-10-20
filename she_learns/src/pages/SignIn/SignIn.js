import './SignIn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [inputs, setInputs] = useState({});
  return (
    <div className="SignIn">
      <body className="SignIn-body">
        <h2>Sign In</h2>
        <form className="form-input">
          <label>Username</label>
          <input 
            className="input-box" 
            type="text"></input>
        </form>
        <form className="form-input">
          <label>Password</label>
          <input 
            className="input-box" 
            type="text"></input>
        </form>
        <button type="submit" className="submit-button">Sign In</button>
        <p>Not a user?</p>
        <Link to ='/signup'>Create an Account</Link>
        
      </body>
    </div>
  );
  }

export default SignIn;
