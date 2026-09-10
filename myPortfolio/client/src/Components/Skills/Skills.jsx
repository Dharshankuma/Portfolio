import React from "react";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import SkillCard from "../ReusableUI/CardComponents/SkillCard";
import SectionWrapper from "../../Animations/SectionWrapper";
import { SKILLS_DATA } from "./SkillsContent";
import "./Skills.css";

const Skills = () => {
  return (
    <SectionWrapper>
      <section className="skills_section portfolio-section" id="skills">
        <div className="portfolio-container">
          {/* Section Header */}
          <div className="section_header text-center">
            <span className="section-tag">
              <HiOutlineWrenchScrewdriver /> Technical Stack
            </span>
            <h2 className="section-title">
              Technologies & <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A comprehensive toolkit developed through hands-on enterprise software engineering, database optimization, and modern web application development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills_grid">
            {SKILLS_DATA.map((category) => (
              <div className="skill_grid_item" key={category.id}>
                <SkillCard
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  skills={category.skills}
                  isPrimary={category.isPrimary}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Skills;
