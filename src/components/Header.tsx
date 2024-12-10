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

          <div className="contact-info">
              <span className="email">Email: <a href="mailto:zhengjames2001.com">zhengjames2001@gmail.com</a></span>
              <span className="phone">Phone: (617) 953-4286</span>
          </div>
      </header>
  );
}

export default Header;