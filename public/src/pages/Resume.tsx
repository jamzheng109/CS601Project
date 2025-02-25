import React from 'react';
import '../styles/Resume.css';

const Resume: React.FC = () => {
  return (
      <section id="resume" className="resume-section">
          <h2>Resume</h2>
          <p className="intro">Below is a complete overview of my resume, displaying my professional experience, education, and skills.</p>
          <div className="pdf-container">
              <iframe src="/James_Zheng_Resume.pdf" width="100%" height="600px">
                  <a href="/James_Zheng_Resume.pdf" download>Download Resume</a>.
              </iframe>
          </div>

          <div className="download-section">
              <a href="/James_Zheng_Resume.pdf" download className="btn-download">Download My Resume (PDF)</a>
          </div>
      </section>
  );
}

export default Resume;