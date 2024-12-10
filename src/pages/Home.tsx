import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! I'm <strong>James Zheng</strong>, a passionate software developer. Explore my portfolio to learn more about me,
          my interests, and my work!
        </p>
      </div>
      <div className="skills-section">
        <h1>Learn about me</h1>
        <div className="grid-container">
          <Link to="/biography" className="grid-box">
            <h2>Biography</h2>
          </Link>
          <Link to="/interests" className="grid-box">
            <h2>Interests</h2>
          </Link>
          <Link to="/resume" className="grid-box">
            <h2>Resume</h2>
          </Link>
          <Link to="/gallery" className="grid-box">
            <h2>Gallery</h2>
          </Link>
          <Link to="/skills" className="grid-box">
            <h2>Skills</h2>
          </Link>
        </div>
      </div>
    </div>
)
  ;
};

export default Home;