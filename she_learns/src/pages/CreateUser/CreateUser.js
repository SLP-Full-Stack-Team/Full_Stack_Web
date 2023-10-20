import '../CreateUser/CreateUser.css';
import { useState } from 'react';

function CreateUser() {
  const [inputs, setInputs] = useState({});
  return (
    <div className="CreateUser">
      <body  className="CreateUser-body">
        <h2>Create an Account</h2>
        <form className="form-input">
          <label>First Name</label>
          <input 
            className="input-box"
            type="text" 
             />
        </form>
        <form className="form-input">
          <label>Last Name</label>
          <input 
            className="input-box"
            type="text" 
             />
        </form>
        <form className="form-input">
          <label>Username</label>
          <input 
            className="input-box"
            type="text" 
            />
        </form>
        <form className="form-input">
          <label>Email</label>
          <input 
            className="input-box"
            type="text" 
             />
        </form>
        <form className="form-input">
          <label>Password</label>
          <input 
            className="input-box"
            type="text" 
            />
        </form>
        <form className="form-input">
          <label>Confirm Password</label>
          <input 
            className="input-box"
            type="text" 
           />
        </form>
        <button type="submit" className="submit-button">Create Account</button>
      </body>
    </div>
  );
}

export default CreateUser;