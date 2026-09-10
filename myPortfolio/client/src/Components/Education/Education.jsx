import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import SectionWrapper from "../../Animations/SectionWrapper";
import { EDUCATION_LISTS } from "./EducationContents";
import CommonCard from "../ReusableUI/CardComponents/CommonCard";

const Education = () => {
  return (
    <SectionWrapper>
      <section className="education_section portfolio-section" id="education">
        <div className="portfolio-container">
          {/* Section Header */}
          <div className="section_header text-center">
            <span className="section-tag">
              <HiOutlineAcademicCap /> Academic Background
            </span>
            <h2 className="section-title">
              Education & <span className="gradient-text">Foundations</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Formal computer science education grounding theoretical principles in algorithms, data structures, database systems, and cloud computing.
            </p>
          </div>

          <div className="experience_list_wrapper">
            {EDUCATION_LISTS &&
              EDUCATION_LISTS.map((item) => (
                <CommonCard key={item.id} lists={item} type="education" />
              ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Education;
