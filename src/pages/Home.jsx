import React from 'react';
import '../components/Home.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">Ammar</h1>
          <h2 className="hero-title">MERN Stack Developer</h2>
          <p className="hero-bio">
            I build responsive, user-friendly web applications with modern technologies.
            Passionate about creating solutions that make a difference.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;