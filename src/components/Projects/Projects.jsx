// src/components/Projects/Projects.jsx
import React from 'react';
import './Projects.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Projects = () => {
  useScrollAnimation('.project-card');

  const projects = [
    {
      title: "Autonomous Agent",
      description: "AI-powered automation product designed to interact with systems and users autonomously for streamlining operations.",
      icon: "fas fa-robot",
      tags: ["React", "Redux Toolkit", "Konva.js", "Chart.js", "REST API"]
    },
    {
      title: "Bukit",
      description: "Scalable event booking system with real-time seat selection and advanced filtering capabilities.",
      icon: "fas fa-ticket-alt",
      tags: ["React", "Konva.js", "Lazy Loading", "Caching"]
    },
    {
      title: "Qatar Insurance Company",
      description: "Implemented logic within low-code tool's flow builder and designed responsive user interfaces.",
      icon: "fas fa-shield-alt",
      tags: ["React", "Low-code", "UI/UX"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">myProjects()</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;