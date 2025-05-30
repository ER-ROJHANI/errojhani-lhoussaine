import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-logo">
          <a href="#top">
            <img src="/Images/LOGO.png" alt="Logo" className="logo-image" />
          </a>
        </div>
        <div className="nav-links">
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          {/* <a href="#contact">Contact</a> */}
          <a
            href="/Er-rojhani L'houssaine Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;