import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import DashboardDetails from './components/DashboardDetails';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import SocialBar from './components/SocialBar';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <Navigation />
            <Header />
            <Home />
            <Footer />
            <SocialBar />
          </div>
        } />
        <Route path="/dashboard-details" element={<DashboardDetails />} />
        <Route path="/about" element={
          <div className="app">
            <Navigation />
            <About />
            <Footer />
            <SocialBar />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;