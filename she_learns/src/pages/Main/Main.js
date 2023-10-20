import React, { useState } from 'react';
import './Main.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Upload from '../User/User'


function Main() {
 const [isQuestionClicked, setIsQuestionClicked] = useState(false);
 const [isAnswerClicked, setIsAnswerClicked] = useState(false);


 const handleQuestionClick = () => {
   setIsQuestionClicked(true);
 };


 const handleAnswerClick = () => {
   setIsAnswerClicked(true);
 };


 return (
   <div className="Main">
     <body className="Main-body" contentEditable="true">
       <form className="form-questions" contentEditable="true" onClick={handleQuestionClick}>
         <label style={{ display: isQuestionClicked ? 'none' : 'block' }}>Question</label>
       </form>
       <form className="form-answers" contentEditable="true" onClick={handleAnswerClick}>
         <label style={{ display: isAnswerClicked ? 'none' : 'block' }}>Answers</label>
       </form>
       <button type="submit" className="submit-buttonM"></button>
     </body>
   </div>
 );
}


export default Main;