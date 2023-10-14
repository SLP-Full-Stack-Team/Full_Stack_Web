import './User.css';
import userPic from './images/profile-user.png'

function User() {
  return (
    <div className="User">
      <header className="User-header">
        <div className="User-profile">
          <div className = "User-container">
            <div className = "User-items">
              <div className = "User-info">
                <div className = "User-pic">
                  <img className="picture" src={userPic} alt = "user profile picture"  />
                </div>
                <div className = "User-bio">
                  <body className = "User-bio-item" id = "User-name" >Jane Cooper</body>
                  <body className = "User-bio-item"  id = "User-detail" >jane123</body>
                  <body className = "User-bio-item"  id = "User-detail" >jane123@gmail.com</body>
                </div>
              </div>
            </div>
            <div className = "User-items" id = 'User-upload-area'>
              <div className="User-upload-header">
                <div className = "User-upload-title">Upload History</div>
                <div className = "User-upload-btn-area">
                  <button className = "User-upload-btn">UPLOAD</button>
                </div>
              </div>
              <div className="User-uploads">
                <div className = "User-uploads-details">
                No Uploads Yet...
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default User;