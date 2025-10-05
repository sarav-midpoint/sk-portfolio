// src/components/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">aboutMe()</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="code-editor">
              <div className="editor-header">
                <div className="editor-title">profile.js</div>
              </div>
              <div className="editor-body">
                <div className="line-numbers">
                  1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14
                </div>
                <div className="code-content">
                  <span className="code-keyword">const</span>
                  <span className="code-function"> developer</span> = {'{'}
                  <br />
                  &nbsp;&nbsp;name:
                  <span className="code-string">"SaravanaKarthikeyan U"</span>
                  ,
                  <br />
                  &nbsp;&nbsp;role:
                  <span className="code-string">"Frontend Engineer"</span>,
                  <br />
                  &nbsp;&nbsp;experience:
                  <span className="code-string">"3.8+ years"</span>,
                  <br />
                  &nbsp;&nbsp;specialization: [<span className="code-string"
                    >"React.js"</span
                  >, <span className="code-string">"NextJs"</span>,
                  <span className="code-string">"TypeScript"</span>,
                  <span className="code-string">"Redux"</span>],
                  <br />
                  &nbsp;&nbsp;location:
                  <span className="code-string">"Chennai"</span>,
                  <br />
                  &nbsp;&nbsp;email:
                  <span className="code-string">"saravanask0112@gmail.com"</span>
                  ,
                  <br />
                  &nbsp;&nbsp;phone:
                  <span className="code-string">"9944423405"</span>,
                  <br />
                  &nbsp;&nbsp;skills: {'{'}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;languages: [<span className="code-string"
                    >"JavaScript"</span
                  >, <span className="code-string">"TypeScript"</span>,
                  <span className="code-string">"HTML"</span>,
                  <span className="code-string">"CSS"</span>],
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;frameworks: [<span className="code-string"
                    >"React"</span
                  >, <span className="code-string">"Redux"</span>, <span className="code-string">"Tailwind Css"</span>,
                  <span className="code-string">"Bootstrap"</span>],
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;tools: [<span className="code-string"
                    >"Git"</span
                  >, <span className="code-string">"Webpack"</span>,
                  <span className="code-string">"Jest"</span>]
                  {/* <br /> */}
                  &nbsp;&nbsp;
                  <br />
                  {'}'};
                </div>
              </div>
            </div>
          </div>
          <div className="about-img">
            <div className="profile-img-container">
              <div className="profile-img">
                <i className="fas fa-code"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;