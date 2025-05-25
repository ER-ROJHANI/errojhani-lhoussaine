import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header fade-in">
      <div className="header-content">
        <div className="header-text">
          <h1>Showcase Your<br />Skills with a<br />Minimalist</h1>
          <p className="header-description">
            Welcome to DevPortfolio, where we highlight projects in Flutter,
            Angular, Symfony, and Laravel. Our elegant dark theme with
            black and beige colors creates a professional showcase for
            your skills in web and app development.
          </p>
          <div className="header-cta">
            <a href="#projects" className="button">View Projects</a>
            <a href="#contact" className="button button-outline">Contact Me</a>
          </div>
        </div>
        <div className="header-image">
          {/* <div className="tech-stack">
            <span className="tech-item">Flutter</span>
            <span className="tech-item">Angular</span>
            <span className="tech-item">Symfony</span>
          </div> */}
          <img 
            src="/Images/3D Developer.png" 
            alt="3D Developer Illustration" 
            className="developer-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;