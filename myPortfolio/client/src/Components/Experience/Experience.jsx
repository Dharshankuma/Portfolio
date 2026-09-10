import React from "react";
import { HiOutlineBriefcase } from "react-icons/hi2";
import CommonCard from "../ReusableUI/CardComponents/CommonCard";
import { EXPERIENCE_LIST } from "./ExperienceList";
import SectionWrapper from "../../Animations/SectionWrapper";
import "./Experience.css";

const Experience = () => {
  return (
    <SectionWrapper>
      <section className="experience_section portfolio-section" id="experience">
        <div className="portfolio-container">
          {/* Section Header */}
          <div className="section_header text-center">
            <span className="section-tag">
              <HiOutlineBriefcase /> Career Journey
            </span>
            <h2 className="section-title">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Track record of engineering production backend services, optimizing enterprise databases, and building full-stack integrations.
            </p>
          </div>

          <div className="experience_list_wrapper">
            {EXPERIENCE_LIST &&
              EXPERIENCE_LIST.map((item) => (
                <CommonCard key={item.id} lists={item} type="experience" />
              ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Experience;
