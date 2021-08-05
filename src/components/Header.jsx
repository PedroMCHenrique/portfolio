import React from 'react';
import './Header.css';
const Header = () => (
  <header className="header">
    <nav className="nav-bar">
      <a href="#about" className="header-link">About</a>
      <a href="#projects" className="header-link">Projects</a>
      <a href="#contact" className="header-link">Contact</a>
    </nav>
  </header>
);

export default Header;