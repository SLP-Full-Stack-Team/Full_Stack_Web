import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/CreateUser/CreateUser';
import User from './pages/User/User';
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  return (
    <Router>
        <nav className='nav-container'>
            <div className='nav-left'>
              <Link to='/main' className='nav-link-main'><img src= 'shecodes-logo.png' className='nav-logo'></img>sheLearns</Link>
            </div>
            <div className='nav-right'>
              <Link to='/user' className='btn'><i className="bi bi-person-circle"></i></Link>
              <Link to='/signin' className='btn btn-light'>Sign In</Link>
            </div>
            
            {<Link to='/signup' className='nav-link-signup'>Sign Up</Link>
            }
        </nav>

        <Routes>
            <Route path='/main' element={<Main />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/user' element={<User />} />
        </Routes>
    </Router>
  );
}

export default App;
