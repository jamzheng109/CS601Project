import React from 'react';
import '../styles/Skills.css';

interface SkillProps {
  name: string;
}

const SkillItem: React.FC<SkillProps> = ({ name }) => (
  <div className="skill-item">
    {name}
  </div>
);

const Skills: React.FC = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Java', 'TypeScript', 'RStudio', 'Python'
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <p>These are skills I have acquired throughout my studies in undergrad and Masters</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;