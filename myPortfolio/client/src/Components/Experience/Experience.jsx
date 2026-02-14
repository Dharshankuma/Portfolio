import React from "react";
import CommonCard from "../ReusableUI/CardComponents/CommonCard";
import { EXPERIENCE_LIST } from "./ExperienceList";
import SectionWrapper from "../../Animations/SectionWrapper";

const Experience = () => {
  return (
    <SectionWrapper>
      <section className="experience_section mt-3">
        <div className="container-fluid">
          <h2 className="section-title">Experience</h2>

          <div className="row mt-2">
            {EXPERIENCE_LIST &&
              EXPERIENCE_LIST.map((item, index) => (
                <div className="col-12 mt-3" key={index}>
                  <CommonCard lists={item} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Experience;
