import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MainContent from './components/MainContent';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/main" element={<MainContent />} />
      </Routes>
    </Router>
  );
};

export default App;
