import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">Ammar</Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/qualifications" className={`nav-link ${location.pathname === '/qualifications' ? 'active' : ''}`}>
              Qualifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/certifications" className={`nav-link ${location.pathname === '/certifications' ? 'active' : ''}`}>
              Certifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;