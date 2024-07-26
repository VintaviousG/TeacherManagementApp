import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import  AuthProvider  from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (

    <AuthProvider>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
        
      </Router>
    </AuthProvider>
  );
}

export default App;
