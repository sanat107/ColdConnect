// import React from 'react'

// const Signup = () => {
//   return (
//     <div>Signup</div>
//   )
// }

// export default Signup

import React, { useState } from 'react';
import './Signup.css';

function SignupPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, e.g., API call

    // Reset form fields
    setName('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* <div className="signup-header">
          <img src="twitter-logo.png" alt="Twitter Logo" className="logo" />
        </div> */}
        <div className="signup-body">
          <h2>Create your account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={handleNameChange}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="input-field"
            />
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="login-link">
            Already have an account? <a href="#">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
