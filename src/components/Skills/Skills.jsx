// src/components/Skills/Skills.jsx
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">mySkills()</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3><i className="fas fa-code"></i> Languages</h3>
            <ul className="skill-list">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3/SCSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-layer-group"></i> Frameworks & Libraries</h3>
            <ul className="skill-list">
              <li>React.js</li>
              <li>NextJS</li>
              <li>Redux & Redux Toolkit</li>
              <li>React Router</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>Styled Components</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-tools"></i> Tools & Technologies</h3>
            <ul className="skill-list">
              <li>Git & GitHub</li>
              <li>Webpack</li>
              <li>Vite</li>
              <li>Jest & React Testing Library</li>
              <li>ESLint & Prettier</li>
              <li>Chrome DevTools</li>
              <li>Agile/Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;