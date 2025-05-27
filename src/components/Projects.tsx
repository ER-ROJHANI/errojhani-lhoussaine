import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    { id: 1, title: "Project 1", category: "Design" },
    { id: 2, title: "Project 2", category: "Development" },
    { id: 3, title: "Project 3", category: "Branding" },
    { id: 4, title: "Project 4", category: "UI/UX" }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>My last work</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-content">
              <span className="project-number">{project.id}</span>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;