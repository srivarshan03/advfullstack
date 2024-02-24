import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Register.css'

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Add more advanced registration logic here if needed
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Perform registration logic
      alert('Registration functionality will be implemented here.');
    }
  };

  return (
    <div className='app'>
      <video className="background-video" autoPlay muted loop>
        <source src="src/assets/images/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className="registration-container">
        <h2>Corporate Event Manager Registration</h2>
        <form>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}

          <Link to='/login'>
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          </Link>
        </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
