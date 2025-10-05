// src/components/Contact/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: "fas fa-phone",
      title: "Phone",
      content: "9944423405"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "saravanask0112@gmail.com"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      content: "SaravanaKarthikeyan",
      link: "https://www.linkedin.com/in/saravana-karthikeyan-u-111752250"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">contactMe()</h2>
        <p>
          I'm currently open to new opportunities and would love to hear from
          you!
        </p>
        <div className="contact-info">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-item">
              <div className="contact-icon">
                <i className={item.icon}></i>
              </div>
              <div className="contact-details">
                <h3>{item.title}</h3>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.content}
                  </a>
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;