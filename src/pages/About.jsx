import React from 'react';
import '../styles/About.css';

function About() {
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = "/assets/CV.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/assets/images/my.png" alt="Profile" />
          </div>
          
          <div className="about-text">
            <p>
              Hello! I'm a passionate MERN Stack Developer with a strong foundation in 
              building responsive websites. My journey in web development started 
              in 2025. I enjoy creating dynamic and user-friendly applications that solve real-world problems.
            </p>
            
            <p>
              I specialize in creating responsive, user-friendly applications using 
              React, Node.js, Express, and MongoDB. I love solving complex problems 
              and turning ideas into reality through code.
            </p>
            
            <p>
              When I'm not coding, I explore emerging technologies and share coding lessons on YouTube.
            </p>

            
            <h3 className="skills-title">Tech Stack</h3>
            <div className="tech-icons">
              <div className="tech-icon">HTML5</div>
              <div className="tech-icon">CSS3</div>
              <div className="tech-icon">JavaScript</div>
              <div className="tech-icon">React</div>
              <div className="tech-icon">Node.js</div>
              <div className="tech-icon">MongoDB</div>
              <div className="tech-icon">MySQL</div>
              <div className="tech-icon">Express.js</div>
              <div className="tech-icon">Git</div>
            </div>
            
            <button className="resume-btn" onClick={handleDownloadResume}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;