import React, { useState } from 'react';
import "/src/assets/css/login.css";

import { Link, useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here
    alert('Login functionality will be implemented here.');
  };

  const handleForgotPassword = () => {
    // Add logic to handle the "Forgot Password" action
    alert('Forgot Password functionality will be implemented here.');
  };
  const handleRegister = ()=> {
    Navigate('/register');
  }

  return (
    <div className='event'>
      {/* Add the video element for the background video */}
      

      <div className="login-container">
        <h2>Corporate Event Manager Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <center><Link to='/home'>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </Link>
          </center>

          <div className='forget'>
            <button type='button' onClick={handleForgotPassword}>
              Forgot Password
            </button>
    <span classname='nu' onClick={handleRegister}>New user</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
