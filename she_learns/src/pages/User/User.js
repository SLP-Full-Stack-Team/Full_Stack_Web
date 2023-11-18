import './User.css';
import { Link } from 'react-router-dom';

function User() {
  return (
    <div className="User-container">
      <div className = "User-info">
        <i className="bi bi-person-circle" id = "user-icon"></i>
        <ul className = "User-bio">
          <li className = "User-name" >sheCodes</li>
          <li className = "User-detail">User Name: slp2023</li>
          <li className = "User-detail">Email: cppshecodes@gmail.com</li>
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