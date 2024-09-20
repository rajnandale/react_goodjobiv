import React from 'react';
import '../assets/Contact.css'; // Ensure you create and include this CSS file
import Header from '../components/Header';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="contact-us-container">
      <Header />
      <section className="contact-us-intro">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! Whether you have a question, a suggestion, or just want to connect, feel free to reach out to us through any of the following channels:
        </p>
      </section>
      <section className="contact-methods">
        <div className="contact-method">
          <FaEnvelope className="contact-icon" />
          <div className="contact-info">
            <h2>Email</h2>
            <p>You can email us at:</p>
            <a href="mailto:mail6164@duck.com">mail6164@duck.com</a>
          </div>
        </div>
        <div className="contact-method">
          <FaGithub className="contact-icon" />
          <div className="contact-info">
            <h2>GitHub</h2>
            <p>Check out our repositories and projects on GitHub:</p>
            <a href="https://github.com/rajnandale" target="_blank" rel="noopener noreferrer">Swaraj Developers Connect @ GitHub</a>
          </div>
        </div>
        <div className="contact-method">
          <FaLinkedin className="contact-icon" />
          <div className="contact-info">
            <h2>LinkedIn</h2>
            <p>Connect with us on LinkedIn:</p>
            <a href="https://linkedin.com/in/rajnandale" target="_blank" rel="noopener noreferrer">Founder of Swaraj</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
