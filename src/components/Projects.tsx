import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Orange Maroc",
      category: "Web Development",
      description: "Développement et maintenance de la plateforme e-commerce d'Orange Maroc. Optimisation des performances et amélioration de l'expérience utilisateur.",
      image: "/Images/Orange Logo.png",
      link: "https://www.orange.ma/",
      className: "orange-project"
    },
    {
      title: "Tiktak Vendeur",
      category: "Mobile Development",
      description: "Application mobile permettant aux commerçants de gérer leurs commandes, leur catalogue de produits et suivre les livraisons en temps réel. Intégration de fonctionnalités de gestion de stock et d'analyses des ventes.",
      image: "/Images/tiktak-vendor.png",
      tech: "React Native, Redux",
      link: "#"
    },
    {
      title: "Tiktak Client",
      category: "Mobile Development",
      description: "Application mobile intuitive permettant aux clients de découvrir et commander auprès de multiples vendeurs locaux. Système de paiement sécurisé et suivi des livraisons en temps réel.",
      image: "/Images/tiktak-client.png",
      tech: "React Native, Redux",
      link: "#"
    },
    {
      title: "Tiktak Livreur",
      category: "Mobile Development",
      description: "Application mobile pour les livreurs avec système avancé de géolocalisation, optimisation des itinéraires et gestion intelligente des livraisons multiples.",
      image: "/Images/tiktak-delivery.png",
      tech: "React Native, Maps API",
      link: "#"
    },
    {
      title: "Tiktak Dashboard",
      category: "Web Development",
      description: "Interface d'administration complète permettant la gestion de l'écosystème Tiktak, incluant analyses, rapports et outils de gestion des utilisateurs.",
      image: "/Images/tiktak-dashboard.png",
      tech: "React, Material-UI",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>My last work</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>

                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Voir le projet
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
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