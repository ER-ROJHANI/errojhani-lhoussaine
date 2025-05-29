import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Orange Maroc",
      category: "Web Development",
      description: "Development and maintenance of Orange Morocco's e-commerce platform. Performance optimization and user experience improvement.",
      image: "/Images/Orange Logo.png",
      link: "https://www.orange.ma/",
      className: "orange-project full-image"
    },
    {
      title: "Tiktak Client",
      category: "Mobile Development",
      description: "Intuitive mobile application enabling customers to discover and order from multiple local vendors. Secure payment system and real-time delivery tracking.",
      image: "/Images/tiktak-client.png",
      tech: "React Native, Redux",
      link: "https://play.google.com/store/apps/details?id=ma.tiktak.user"
    },
    {
      title: "Tiktak Delivery",
      category: "Mobile Development",
      description: "Mobile application for delivery drivers with advanced geolocation system, route optimization, and intelligent multiple delivery management.",
      image: "/Images/tiktak-delivery.png",
      tech: "React Native, Maps API",
      link: "https://play.google.com/store/apps/details?id=ma.tiktak.delivery"
    },
    {
      title: "Tiktak Vendor",
      category: "Mobile Development",
      description: "Mobile application allowing merchants to manage their orders, product catalog, and track deliveries in real-time. Integration of inventory management features and sales analytics.",
      image: "/Images/tiktak-vendor.png",
      tech: "React Native, Redux",
      link: "https://play.google.com/store/apps/details?id=ma.tiktak.vendor"
    },
    {
      title: "Tiktak Dashboard",
      category: "Web Development",
      description: "Comprehensive administration interface for managing the Tiktak ecosystem, including analytics, reports, and user management tools.",
      image: "/Images/tiktak-dashboard.png",
      tech: "Laravel",
      link: "/dashboard-details",
      className: "dashboard-project",
      techLogos: [
        "/Images/laravel-logo.png"
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>My last work</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-item ${project.className || ''}`}>
            <div className="project-image">
              {project.techLogos ? (
                <div className="tech-logos">
                  {project.techLogos.map((logo, i) => (
                    <img key={i} src={logo} alt={`Technology ${i + 1}`} className="tech-logo" />
                  ))}
                </div>
              ) : (
                <img src={project.image} alt={project.title} />
              )}
            </div>
            <div className="project-content">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>

                {project.link && (
                  project.link.startsWith('http') ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      View project
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  ) : (
                    <Link to={project.link} className="project-link">
                      Details
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;