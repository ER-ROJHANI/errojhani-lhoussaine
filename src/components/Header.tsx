import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header fade-in">
      <div className="header-content">
        <div className="header-text">
          <h1>Crafting Digital Experiences with Precision</h1>
          <p className="header-description">
            A minimalist portfolio designed to let your work speak for itself.
           The elegant dark theme, with its timeless black and beige palette, 
           reflects a commitment to clean, 
           impactful design and seamless functionality—whether for web, mobile, or beyond.
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
            src="/Images/3D_Developer.png" 
            alt="3D Developer Illustration" 
            className="developer-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;