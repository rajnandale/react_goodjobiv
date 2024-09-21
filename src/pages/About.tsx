import React from 'react';
import '../assets/About.css'; // Ensure you create and include this CSS file
import Header from '../components/Header';

const About: React.FC = () => {
  return (
    <div className="about-us-container">
      <Header />
      <section className="about-us-intro">
        <img src="../assets/SwarajLogo.jpg" alt="Swaraj Software Solutions" className="about-us-image" />
        <div className="about-us-text">
          <p>
            Welcome to Swaraj Software Solutions, an emerging leader in software development and AI-driven solutions.
            We are a team of like-minded, curious, hardworking, and productive engineers dedicated to pushing the
            boundaries of technology. Our mission is to harness the power of artificial intelligence to create innovative
            solutions that drive success for our clients and partners.
          </p>
          <p>
            At Swaraj Software Solutions, we believe in collaboration and continuous learning. Our diverse team
            brings a wealth of experience and a passion for technology to every project. We are committed to excellence
            and strive to exceed expectations by delivering high-quality, cutting-edge software solutions.
          </p>
        </div>
      </section>
      <section className="about-us-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Innovation:</strong> We embrace creativity and drive change through technology.</li>
          <li><strong>Integrity:</strong> We conduct our business with the highest standards of honesty and transparency.</li>
          <li><strong>Collaboration:</strong> We value teamwork and believe in the power of collective effort.</li>
          <li><strong>Excellence:</strong> We are committed to delivering exceptional results and continuous improvement.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
