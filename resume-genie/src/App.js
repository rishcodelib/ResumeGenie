import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ResumeDetails from './components/ResumeDetails';

function App() {
  return (
    <Router basename="/ResumeGenie-frontend">
      <div className="App">
        <Helmet>
          <title>Resume Genie</title>
        </Helmet>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resume-details" element={<ResumeDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;