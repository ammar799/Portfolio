import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
            GitHub
          </a>
          {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
            Live Demo
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;