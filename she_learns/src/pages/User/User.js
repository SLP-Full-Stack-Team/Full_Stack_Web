import './User.css';

function User() {
  return (
    <div className="User">
      <header className="User-header">
        <img src= 'sheCodes_logo.png' className="User-logo" alt="logo" />
        <p>User Page</p>
        <p>
          Edit <code>src/UserPage/User.js</code> and save to reload.
        </p>
        <a
          className="User-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default User;