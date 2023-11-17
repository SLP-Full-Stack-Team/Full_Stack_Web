import { Fragment, useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [inputs, setInputs] = useState({
    user_name: '',
    user_pswd: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const onSubmitSignInForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5002/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });

      console.log(response);

      if (response.ok) {
        // HTTP status code 200-299 indicates success
        window.location = '/main';
      } else if (response.status === 401) {
        // Invalid username or password
        setErrorMessage('Invalid username or password');
      } else {
        // Handle other errors
        console.error('Error during login');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="SignIn">
        <body className="SignIn-body">
          <h2>Sign In</h2>
          <form className="si-form-input">
            <label>Username</label>
            <input
              className="si-input-box"
              type="text"
              name="user_name"
              value={inputs.user_name}
              onChange={handleInputChange}
            />
          </form>
          <form className="si-form-input">
            <label>Password</label>
            <input
              className="si-input-box"
              type="password"
              name="user_pswd"
              value={inputs.user_pswd}
              onChange={handleInputChange}
            />
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button className="btn si-submit-button" onClick={onSubmitSignInForm}>
            Sign In
          </button>

          <div className="si-not-user-link">
            <p>Not a user?</p>
            <Link to="/signup">Create an Account</Link>
          </div>
        </body>
      </div>
    </Fragment>
  );
};

export default SignIn;
