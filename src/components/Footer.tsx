import React from 'react';
import '../styles/Footer.css'; // Import the styles for Footer

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 James Zheng. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;