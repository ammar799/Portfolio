import React from 'react';
import '../styles/Qualification.css';

function Qualifications() {
  const educationData = [
    {
      id: 1,
      degree: "Post Graduation",
      course: "Master of Computer Applications (MCA)",
      institution: "Integral University",
      year: "2026 - 2028",
      percentage: "",
      description: "Currently pursuing"
    },
    {
      id: 2,
      degree: "Graduation",
      course: "Bachelor of Commerce (B.Com)",
      institution: "Shia PG College",
      year: "2023 - 2026",
      percentage: "",
      description: "Studied commerce with a focus on accounting, finance, and business management."
    },
    {
      id: 3,
      degree: "12th Standard",
      course: "Intermediate (Commerce + Computer Science)",
      institution: "Al Huda Model College",
      year: "2023",
      percentage: "82%",
      description: "Achieved high marks in commerce subjects and computer science, demonstrating strong analytical and technical skills."
    },
    {
      id: 4,
      degree: "10th Standard",
      course: "High School",
      institution: "Al Huda Model College",
      year: "2021",
      percentage: "94%",
      description: "Completed with distinction in all subjects."
    }
  ];

  return (
    <div className="qualifications-page">
      <div className="qualifications-container">
        <h1 className="qualifications-title">My Education</h1>
        <p className="qualifications-subtitle">
          My academic journey and educational qualifications
        </p>

        <div className="timeline">
          {educationData.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-badge">
                <span className="degree-badge">{edu.degree}</span>
              </div>
              <div className="timeline-content">
                <h3>{edu.course}</h3>
                <h4>{edu.institution}</h4>
                <div className="timeline-details">
                  <span className="year">{edu.year}</span>
                  <span className="percentage">Score: {edu.percentage}</span>
                </div>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Qualifications;