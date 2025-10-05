// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/saravana-karthikeyan-u-111752250" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p>&copy; 2023 SaravanaKarthikeyan U. All Rights Reserved.</p>
        <div className="copyright">
          <p>Designed & Built by SaravanaKarthikeyan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;