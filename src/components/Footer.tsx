import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          © {new Date().getFullYear()} L'houssaine Er-rojhani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 