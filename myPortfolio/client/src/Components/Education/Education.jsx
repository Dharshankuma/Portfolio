import React from "react";
import SectionWrapper from "../../Animations/SectionWrapper";
import { EDUCATION_LISTS } from "./EducationContents";
import CommonCard from "../ReusableUI/CardComponents/CommonCard";
const Education = () => {
  return (
    <SectionWrapper>
      <section className="education_section mt-3">
        <div className="container-fluid">
          <h2 className="section-title">Education</h2>

          <div className="row">
            {EDUCATION_LISTS &&
              EDUCATION_LISTS.map((item, index) => (
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

export default Education;
