// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="header">
      <div className="container">
        <nav>
          <div className="logo">SK<span>()</span> =&gt; Frontend Engineer</div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={handleNavClick}>home()</a></li>
            <li><a href="#about" onClick={handleNavClick}>about()</a></li>
            <li><a href="#skills" onClick={handleNavClick}>skills()</a></li>
            <li><a href="#experience" onClick={handleNavClick}>experience()</a></li>
            <li><a href="#projects" onClick={handleNavClick}>projects()</a></li>
            <li><a href="#contact" onClick={handleNavClick}>contact()</a></li>
          </ul>
          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;