import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthData } = useContext(AuthContext);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      setAuthData(data);
      history.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

