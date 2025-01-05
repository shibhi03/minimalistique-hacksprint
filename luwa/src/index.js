import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import reportWebVitals from './reportWebVitals';
import Course from './Components/Courses';
import KnownDomain from './Components/KnownDomain';
import TakeTest from './Components/TakeTest';
import TestPage from './Components/TestPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />}/>

      {/* Sign up */}
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signup/courses" element={<Course />} />
      <Route path="/signup/known-domain" element={<KnownDomain />} />
      
      {/* Assessment */}
      <Route path="/takeTest" element={<TakeTest />} />
      <Route path="/takeTest/questions" element={<TestPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
