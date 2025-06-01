import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SocialBar from './SocialBar';
import Footer from './Footer';
import '../styles/ProjectDetails.css';

const DashboardDetails: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-page">
      <Link to="/" className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>

      <div className="project-details">
        <div className="project-details-header">
          <h1>Tiktak Dashboard</h1>
        </div>

        <div className="project-details-content">
          <section className="overview">
            <h2>Project Overview</h2>
            <p>
              The Tiktak Dashboard is a comprehensive administration platform designed to manage the entire Tiktak ecosystem. 
              It serves as the central hub for monitoring and controlling all aspects of the Tiktak delivery service.
            </p>
          </section>

          <section className="features">
            <h2>Key Features</h2>
            <ul>
              <li>
                <h3>Real-time Analytics</h3>
                <p>Monitor live order statistics, delivery performance, and business metrics through interactive dashboards.</p>
              </li>
              <li>
                <h3>User Management</h3>
                <p>Comprehensive tools for managing vendors, delivery drivers, and customers. Handle registrations, verifications, and access controls.</p>
              </li>
              <li>
                <h3>Order Management</h3>
                <p>Track and manage all orders in real-time. View detailed order histories, manage disputes, and handle refunds.</p>
              </li>
              <li>
                <h3>Financial Reporting</h3>
                <p>Generate detailed financial reports, manage payments, and track commission structures for all platform participants.</p>
              </li>
            </ul>
          </section>

          <section className="technical">
            <h2>Technical Implementation</h2>
            <ul>
              <li>
                <h3>Backend Architecture</h3>
                <p>Built with robust REST APIs and real-time WebSocket connections for live updates.</p>
              </li>
              <li>
                <h3>Security</h3>
                <p>Advanced authentication system with role-based access control and detailed audit logging.</p>
              </li>
              <li>
                <h3>Database Design</h3>
                <p>Optimized database architecture for handling high-volume transactions and complex relationships between users, orders, and payments.</p>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
      <SocialBar />
    </div>
  );
};

export default DashboardDetails; 