import React from "react";
import SkillCard from "../ReusableUI/CardComponents/SkillCard";
import SectionWrapper from "../../Animations/SectionWrapper";
import { SKILLS_DATA } from "./SkillsContent";
import "./Skills.css";

const Skills = () => {
  return (
    <SectionWrapper>
      <section className="mt-5 mb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2>SKILLS</h2>
              <p>
                Core strengths in backend development with hands-on experience
                across databases, cloud, and frontend collaboration.
              </p>
            </div>
          </div>
          <div className="row g-4 mt-3">
            {SKILLS_DATA.map((category) => (
              <div className="col-12 col-md-6 col-lg-4" key={category.id}>
                <SkillCard
                  icon={category.icon}
                  title={category.title}
                  skills={category.skills}
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
