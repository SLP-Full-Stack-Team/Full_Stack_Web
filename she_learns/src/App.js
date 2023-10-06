import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main/Main'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/CreateUser/CreateUser'


function App() {
  return (
    <Router>
        <nav>
            <Link to='/main' className='nav-link-main'><img src= 'sheCodes_logo.png' className='nav-logo'></img>sheLearns</Link>
            <Link to='/signin' className='nav-link-signin'>Sign In</Link>
            <Link to='/signup' className='nav-link-signup'>Sign Up</Link>
        </nav>
        
        <Routes>
            <Route path='/main' element={<Main />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    </Router>
  );
}

export default App;
