import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-side">
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
      </div>

      <div className="nav-center">
      <img src={process.env.PUBLIC_URL + "/navbar-item.png"} alt="Logo" />
      </div>

      <div className="nav-side">
        <a href="#services">Services</a>
        <a href="#reviews">Reviews</a>
      </div>
    </nav>
  );
}

export default Navbar;


