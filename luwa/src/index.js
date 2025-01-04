import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Components/Home';
import Login from './Components/getting Sarted/Login';
import Signup from './Components/getting Sarted/Signup';
import reportWebVitals from './reportWebVitals';
import Course from './Components/Courses';
import KnownDomain from './Components/KnownDomain';
import TakeTest from './Components/TakeTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/" element={<Course />} /> */}
      {/* <Route path="/" element={<KnownDomain />} /> */}
      <Route path="/" element={<TakeTest />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
