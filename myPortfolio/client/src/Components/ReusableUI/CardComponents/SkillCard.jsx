import React from "react";
import { FaServer } from "react-icons/fa6";
import "./SkillCard.css";
const SkillCard = ({ icon: Icon, title, skills }) => {
  return (
    <div className="skill-card">
      <div className="card-icon-wrapper">
        <Icon size={24} />
      </div>
      <h3 className="card-title">{title}</h3>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
