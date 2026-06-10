import React from 'react';
import "../styles/Certification.css";

function Certifications() {
  const certificationsData = [
    {
      id: 1,
      title: "MERN Stack Development",
      issuer: "Apna College",
      date: "2024",
      credentialId: "MERN-2024-001",
      link: "https://coursera.org/verify/your-certificate-link",
      skills: ["React", "Node.js", "Express", "MongoDB"],
      image: "/assets/images/certificates/mern.jpg"
    }
    
  ];

  return (
    <div className="certifications-page">
      <div className="certifications-container">
        <h1 className="certifications-title">Certifications</h1>
        <p className="certifications-subtitle">
          Professional certifications and courses I've completed
        </p>

        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-image">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200/667eea/white?text=Certificate';
                  }}
                />
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <h4>{cert.issuer}</h4>
                <div className="cert-date">{cert.date}</div>
                <div className="cert-skills">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <div className="cert-id">
                  <span>ID: {cert.credentialId}</span>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  Verify Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;