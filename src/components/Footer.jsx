import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Mohammad Ammar Ansari. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://github.com/ammar799" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohammadammar10/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mohammadammaransari570@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;