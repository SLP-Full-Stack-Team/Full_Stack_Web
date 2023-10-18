import React, { useState } from 'react';
import './Main.css';
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Upload from '../User/User'


function Main() {
  return (
    <div className="Main">
      <body className="Main-body">
        <img src= 'sheCodes_logo.png' className="Main-logo" alt="logo" />
        <p>MAIN PAGE</p>
        {/* <Router>
          <Link to='/upload' className='link-upload'><button>Upload</button></Link>
          <Route path='/upload' element={<Upload />} />
        </Router> */}
        <button>Upload</button>
      </body>
    </div>
  );
}


export default Main;