import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">HelperApp</Link>
      </div>
      <div className="navbar-links">
        <Link to="/seek-help">Seek Help</Link>
        <Link to="/give-help">Give Help</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;

