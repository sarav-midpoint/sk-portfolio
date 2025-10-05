// src/components/Experience/Experience.jsx
import React, { useEffect } from 'react';
import './Experience.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Experience = () => {
  useScrollAnimation('.timeline-item');

  const experiences = [
    {
      company: "Rytsense Technologies",
      position: "Software Engineer",
      achievements: [
        "Led Front-End Development Team, ensuring timely and error-free deployment",
        "Implemented Redux Toolkit and optimized state management",
        "Established and enforced front-end coding standards using ESLint, Prettier"
      ]
    },
    {
      company: "Relevantz Technology Services",
      position: "Software Engineer",
      achievements: [
        "Enhanced performance of React applications by 40%",
        "Actively engaged with clients to gather feedback and provide updates",
        "Integrated REST APIs ensuring smooth data flow"
      ]
    },
    {
      company: "Relevantz Technology Services",
      position: "Junior Software Engineer",
      achievements: [
        "Led design and development of intuitive UI components",
        "Provided timely client support and issue resolution",
        "Actively participated in Agile/Scrum processes"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">workExperience()</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.company}</div>
                <h3>{exp.position}</h3>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;