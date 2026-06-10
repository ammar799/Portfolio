import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../projectData/data';
import '../styles/Project.css';

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          Here are some of my recent works. Each project was built to solve real problems.
        </p>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;