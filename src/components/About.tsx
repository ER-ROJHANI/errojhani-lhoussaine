import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SocialBar from './SocialBar';
import '../styles/About.css';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Link to="/" className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>

      <div className="about-details">
        <div className="about-header">
          <h1>About Me</h1>
          <p className="about-subtitle">Full Stack Developer</p>
        </div>

        <div className="about-content">
          <section className="introduction">
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <img 
                  src="/Images/profile.png" 
                  alt="L'houssaine Er-rojhani" 
                  className="profile-image"
                />
              </div>
              <div className="profile-text">
                <h2>Hello, I'm L'houssaine</h2>
                <div className="profile-description">
                  <p>
                    I'm a passionate Full Stack Developer based in Morocco, specializing in building 
                    exceptional digital experiences. With expertise in both backend and frontend development,
                    I create scalable and efficient solutions that solve real-world problems.
                  </p>
                  <p>
                    My journey in software development has led me to work with various technologies
                    and frameworks. I believe in writing clean, maintainable code and following best 
                    practices to deliver high-quality software solutions that exceed client expectations.
                  </p>
                  <div className="profile-highlights">
                    <div className="highlight-item">
                      <span className="highlight-number">4+</span>
                      <span className="highlight-label">Years Experience</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-number">50+</span>
                      <span className="highlight-label">Projects Completed</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-number">30+</span>
                      <span className="highlight-label">Happy Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <SocialBar />
    </div>
  );
};

export default About; 