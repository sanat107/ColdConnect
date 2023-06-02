import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Logo</div>
      <ul className="navbar-links">
        <li>How It Works</li>
        <li>Our Team</li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn-signup">Sign Up</button>
        <button className="btn-login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
