import React from 'react';
import '../styles/Interests.css';

const Interests: React.FC = () => {
  return (
    <section className="interests-section">
      <h2>My Interests</h2>
        <ul className="interests-list">
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
            <li>Working out</li>
            <li>Gaming</li>
            <li>Traveling</li>
            <li>Technology</li>
            <li>Listening to Music</li>
            <li>Pickle Ball</li>

        </ul>
    </section>
  );
};

export default Interests;