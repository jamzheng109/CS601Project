import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>

        <h1 className="header-title">James Zheng</h1>
      </nav>
    </header>
  );
}

export default Header;