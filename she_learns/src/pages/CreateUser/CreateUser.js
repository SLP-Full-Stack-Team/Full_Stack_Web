import { Fragment, useEffect, useState } from 'react';
import './CreateUser.css';
import { Link } from 'react-router-dom';

const CreateUser = () => {
  const [user_firstName, setFirstName] = useState("");
  const [user_lastName, setLastName] = useState("");
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_pswd, setPswd] = useState("");
  const [show_pswd, setShowPswd] = useState(false);

  const onSubmitUserForm = async e => {
    e.preventDefault();
    try{
      const body = {user_firstName, user_lastName, user_name, user_email, user_pswd};
      const response = await fetch ("http://localhost:5002/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      window.location = "/Main";
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
    <Fragment>
      <div className="CreateUser">
        <body className="CreateUser-body">
          <h2>Create an Account</h2>

            <form className="cu-form-input">
              <label>First Name</label>
              <input className="cu-input-box" type="text"
                     value={user_firstName} onChange={e => setFirstName(e.target.value)} required/>
            </form>

            <form className="cu-form-input">
              <label>Last Name</label>
              <input className="cu-input-box"type="text"
                     value={user_lastName} onChange={e => setLastName(e.target.value)} required/>
            </form>

            <form className="cu-form-input">
              <label>Username</label>
              <input className="cu-input-box" type="text"
                     value={user_name} onChange={e => setName(e.target.value)} required/>
            </form>

            <form className="cu-form-input">
              <label>Email</label>
              <input className="cu-input-box" type="text"
                     value={user_email} onChange={e => setEmail(e.target.value)} required/>
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
              
            <Link to='/main' className='btn cu-submit-button' onClick={e => onSubmitUserForm(e)}>Create Account</Link>
        </body>   
      </div> 
    </Fragment>
  );
}

export default CreateUser;