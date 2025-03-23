import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Helper App</h1>
      <nav>
        <button className="nav-button">Seek Help</button>
        <button className="nav-button">Give Help</button>
        <button className="nav-button">Sign In</button>
      </nav>
    </header>
  );
};

export default Header;

