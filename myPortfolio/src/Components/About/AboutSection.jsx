import React from "react";
import aboutImage from "../../images/Aboutme.png";
import "./AboutSection.css";
import { Button } from "../ReusableUI/Button/Button";
import SectionWrapper from "../../Animations/SectionWrapper";

const AboutSection = () => {
  return (
    <SectionWrapper>
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Image */}
            <div className="col-lg-6 col-md-6 col-12 order-1 order-md-1 d-flex justify-content-center">
              <div className="about-image-wrapper">
                <img src={aboutImage} alt="Profile" />
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6 col-md-6 col-12 order-2 order-md-2 about-content">
              <h2 className="mb-3 fw-bold text-center text-md-start">
                About Me
              </h2>

              <p className="mb-3">
                Results-driven Backend Developer with 2+ years of hands-on
                experience in designing and building scalable, high-performance
                backend systems.
              </p>

              <p className="mb-4">
                Specialized in developing RESTful APIs using ASP.NET Core, with
                strong expertise in SQL Server for efficient data management and
                performance optimization. Experienced in leveraging Microsoft
                Azure for cloud deployment and service integration. While
                backend development is my core focus, I work closely with
                frontend teams and use React.js to ensure seamless API
                integration and end-to-end application reliability.
              </p>

              <div className="about-actions d-flex gap-3 flex-wrap">
                <Button
                  label={"Download CV"}
                  name={"cv_download"}
                  className={"type_1_btn"}
                />
                <Button
                  label={"Connect With Me"}
                  name={"contact_btn"}
                  className={"type_2_btn"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default AboutSection;
