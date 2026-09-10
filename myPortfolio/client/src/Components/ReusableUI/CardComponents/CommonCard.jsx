import React from "react";
import { FaBuilding, FaGraduationCap, FaCalendarDays, FaLocationDot, FaCheck } from "react-icons/fa6";
import "./CommonCard.css";

const CommonCard = ({ lists, type = "experience" }) => {
  const isEducation = type === "education" || !!lists.focus;

  return (
    <div className="common_card glass-panel">
      <div className="card_header_row">
        <div className="card_title_group">
          <div className="card_icon_badge">
            {isEducation ? <FaGraduationCap size={18} /> : <FaBuilding size={16} />}
          </div>
          <div>
            <h3 className="card_main_title">{lists.title}</h3>
            <p className="card_organization">
              {lists.company || lists.subTitle}
              {lists.location && (
                <span className="location_span">
                  <FaLocationDot size={12} /> {lists.location}
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="card_meta_badge">
          <FaCalendarDays size={13} />
          <span>{lists.duration}</span>
        </div>
      </div>

      {lists.focus && (
        <div className="card_focus_box">
          <p className="focus_text">{lists.focus}</p>
        </div>
      )}

      {lists.responsibilities && lists.responsibilities.length > 0 && (
        <div className="card_body_content">
          <h4 className="responsibilities_label">Key Impacts & Responsibilities:</h4>
          <ul className="responsibilities_list">
            {lists.responsibilities.map((item, index) => (
              <li key={index}>
                <FaCheck className="impact_icon" size={12} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {lists.techStack && (
        <div className="card_footer_stack">
          <span className="stack_label">Technologies Used:</span>
          <div className="stack_pills">
            {(Array.isArray(lists.techStack)
              ? lists.techStack
              : lists.techStack.split(" · ")
            ).map((tech, index) => (
              <span key={index} className="stack_pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonCard;
