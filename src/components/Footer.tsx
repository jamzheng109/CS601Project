import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-social">
            <div className="social-icons">
                <a href="https://github.com/jamzheng109/CS601Project" target="_blank" rel="noopener noreferrer">
                    <img src="/icons8-github.svg" alt="GitHub"/>
                </a>
                <a href="https://www.linkedin.com/in/jameszheng7/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons8-linkedin.svg" alt="LinkedIn"/>
                </a>
                <a href="https://www.instagram.com/jamesz.1212/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons8-instagram.svg" alt="Instagram"/>
                </a>
            </div>
        </div>
      </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} James Zheng. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;