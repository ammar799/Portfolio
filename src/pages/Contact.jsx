import React from 'react';
import ContactForm from '../components/ContactForm';
import '../components/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out!
          I'll get back to you as soon as possible.
        </p>
        
        <div className="contact-info">
          <div className="contact-card">
            <h3>Email Me</h3>
            <p>mohammadammaransari570@gmail.com</p>
          </div>
          <div className="contact-card">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://github.com/ammar799" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/mohammadammar10/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a> */}
            </div>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;