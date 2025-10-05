// src/components/Hero/Hero.jsx
import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const typeTerminalText = () => {
      const commands = document.querySelectorAll('.terminal-command');
      commands.forEach((cmd, index) => {
        setTimeout(() => {
          const text = cmd.textContent;
          cmd.textContent = '';
          let i = 0;
          function typeChar() {
            if (i < text.length) {
              cmd.textContent += text.charAt(i);
              i++;
              setTimeout(typeChar, 50);
            }
          }
          typeChar();
        }, 1000 + index * 2000);
      });
    };

    typeTerminalText();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="typing-demo">const developer = new Developer();</div>
          <h1>SaravanaKarthikeyan U</h1>
          <h2>Frontend Engineer & React Specialist</h2>
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <div className="terminal-button close"></div>
                <div className="terminal-button minimize"></div>
                <div className="terminal-button maximize"></div>
              </div>
              <div className="terminal-title">terminal — zsh</div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">skarthikeyan@portfolio ~ % </span>
                <span className="terminal-command">whoAmI</span>
              </div>
              <div className="terminal-output">
                Frontend Engineer with 3.8+ years of experience in React.js,
                TypeScript, and modern web technologies.
              </div>
              <div className="terminal-line" style={{ marginTop: '15px' }}>
                <span className="terminal-prompt">skarthikeyan@portfolio ~ % </span>
                <span className="terminal-command">cat skills.txt</span>
              </div>
              <div className="terminal-output">
                React, Redux, NextJS, TypeScript, JavaScript, HTML5, CSS3, Git, Webpack,
                Jest, ESLint
              </div>
            </div>
          </div>
          <div className="hero-btns">
            <a href="#projects" className="btn">viewProjects()</a>
            <a href="#contact" className="btn btn-terminal">contactMe()</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;