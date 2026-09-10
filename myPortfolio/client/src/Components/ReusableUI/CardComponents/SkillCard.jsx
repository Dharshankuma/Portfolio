import React from "react";
import "./SkillCard.css";

const SkillCard = (props) => {
  const { icon: Icon, title, description, skills, isPrimary = false } = props;
  return (
    <div className={`skill-card glass-panel ${isPrimary ? "primary-skill-card" : ""}`}>
      <div className="skill-card-header">
        <div className="card-icon-wrapper">
          <Icon size={20} />
        </div>
        <div className="card-title-group">
          <h3 className="card-title">{title}</h3>
          {description && <p className="card-description">{description}</p>}
        </div>
      </div>

      <div className="skills-divider"></div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">
            <span className="chip-dot"></span>
            <span className="chip-text">{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
