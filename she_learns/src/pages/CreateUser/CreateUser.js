import { useState } from 'react';
import './CreateUser.css';

function CreateUser() {
  const [inputs, setInputs] = useState({});
  return (
    <div className="CreateUser">
      <body  className="CreateUser-body">
        <h2>Create an Account</h2>
        <form className="cu-form-input">
          <label>First Name</label>
          <input 
            className="cu-input-box"
            type="text" 
             />
        </form>
        <form className="cu-form-input">
          <label>Last Name</label>
          <input 
            className="cu-input-box"
            type="text" 
             />
        </form>
        <form className="cu-form-input">
          <label>Username</label>
          <input 
            className="cu-input-box"
            type="text" 
            />
        </form>
        <form className="cu-form-input">
          <label>Email</label>
          <input 
            className="cu-input-box"
            type="text" 
             />
        </form>
        <form className="cu-form-input">
          <label>Password</label>
          <input 
            className="cu-input-box"
            type="text" 
            />
        </form>
        <button type="submit" className="cu-submit-button">Create Account</button>
      </body>
    </div>
  );
}

export default CreateUser;