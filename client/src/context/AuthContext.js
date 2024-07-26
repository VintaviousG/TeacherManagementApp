import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setAuthData({ token });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setAuthData(null);
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;