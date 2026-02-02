import React from "react";
import aboutImage from "../../../public/images/Aboutme.png";
import "./AboutSection.css";
import { Button } from "../ReusableUI/Button/Button";
import SectionWrapper from "../../Animations/SectionWrapper";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const handlePdfDownload = () => {
    const pdfUrl = "../../../public/pdf/DHARSHAN_resume.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <SectionWrapper>
      <section className="about-section py-5">
        <div className="container-fluid">
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
                Results-driven Software Developer with 2+ years of experience
                building scalable and high-performance backend systems.
              </p>

              <p className="mb-3">
                Specialized in developing RESTful APIs using ASP.NET Core, with
                strong expertise in SQL Server for efficient data management and
                performance optimization.
              </p>

              <p className="mb-4">
                Experienced in deploying and integrating services using
                Microsoft Azure. Backend development is my core focus, while
                collaborating closely with frontend teams using React.js to
                deliver reliable end-to-end applications.
              </p>

              <div className="about-actions d-flex gap-3 flex-wrap">
                <Button
                  label={"Download CV"}
                  name={"cv_download"}
                  className={"type_1_btn"}
                  onClick={handlePdfDownload}
                />
                <Button
                  label={"Connect With Me"}
                  name={"contact_btn"}
                  className={"type_2_btn"}
                  onClick={() => navigate("/contact")}
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
