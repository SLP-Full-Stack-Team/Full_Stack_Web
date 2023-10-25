import './User.css';
import userPic from './images/profile-user.png'
import { Link } from 'react-router-dom';

function User() {
  return (
    <div className="User-container">
      <div className = "User-info">
        <img className="User-picture" src={userPic} alt = "user profile picture"  />
        <ul className = "User-bio">
          <li className = "User-name" >Jane Cooper</li>
          <li className = "User-detail">User Name: jane123</li>
          <li className = "User-detail">Email: jane123@gmail.com</li>
        </ul>
      </div>
      <div className = "User-upload-area">
        <div className = "User-upload-header">
          <h2 className='User-upload-h2'>Upload History</h2>
          <Link to='/main' className='btn User-upload-btn'>Upload</Link>
        </div>
        <div className="User-upload-history">
          <p>No Uploads Yet...</p>
        </div>
      </div>
    </div>
  );
}

export default User;