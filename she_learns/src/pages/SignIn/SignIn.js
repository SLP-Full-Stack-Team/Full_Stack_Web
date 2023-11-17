import './SignIn.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [user_name, setName] = useState("");
  const [password, setPswd] = useState("");
  const checkSign_in = async e =>
  {
    e.preventDefault();
    try{
      const alluserss = await pool.query("SELECT * FROM users ORDER BY user_id DESC");
      alluserss.rows.length;
    }
    catch(err){}
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
            value={user_name} onChange={e => setName(e.target.value)} required
            ></input>
        </form>
        <form className="si-form-input">
          <label>Password</label>
          <input 
            className="si-input-box" 
            type="text"
            value={password} onChange={e => setPswd(e.target.value)} required
            ></input>
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
