import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/biography">Biography</Link></li>
          <li><Link to="/interests">Interests</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/gallery">Photo Gallery</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;