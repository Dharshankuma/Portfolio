import React from "react";
import { FaDownload, FaEnvelope, FaServer, FaDatabase, FaCloud, FaCode } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";
import SectionWrapper from "../../Animations/SectionWrapper";
import "./AboutSection.css";

const AboutSection = () => {
  const handlePdfDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/DHARSHAN_resume.pdf";
    link.download = "DHARSHAN_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const highlights = [
    {
      icon: FaServer,
      title: "Backend Architecture",
      desc: "Architecting clean, modular RESTful APIs using ASP.NET Core & C# with SOLID principles.",
    },
    {
      icon: FaDatabase,
      title: "Database Performance",
      desc: "Optimizing relational schemas, stored procedures, and execution plans in Microsoft SQL Server.",
    },
    {
      icon: FaCloud,
      title: "Cloud & Enterprise",
      desc: "Deploying services on Microsoft Azure and integrating enterprise SharePoint SPFx solutions.",
    },
    {
      icon: FaCode,
      title: "Full-Stack Synergy",
      desc: "Bridging server endpoints with reactive React.js interfaces for cohesive user experiences.",
    },
  ];

  return (
    <SectionWrapper>
      <section className="about_section portfolio-section" id="about">
        <div className="portfolio-container">
          {/* Header */}
          <div className="section_header text-center">
            <span className="section-tag">
              <HiOutlineSparkles /> About Me
            </span>
            <h2 className="section-title">
              Engineering with <span className="gradient-text">Precision & Architecture</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Driven by a deep passion for building resilient backend systems, scalable APIs, and performance-tuned data architectures that solve real-world problems.
            </p>
          </div>

          <div className="about_main_grid">
            {/* LEFT PROFILE CARD */}
            <div className="about_profile_card">
              <div className="about_img_frame">
                <img
                  src="/images/Aboutme1.png"
                  alt="Dharshan Muthukumar"
                  className="about_img"
                />
                <div className="img_overlay"></div>
              </div>

              <div className="about_quick_info">
                <h3 className="profile_name">M Dharshan</h3>
                <p className="profile_role">Software Engineer</p>
                <div className="profile_meta">
                  <span>📍 Chennai, India</span>
                  <span>🎓 MCA (2025–2027)</span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT & PILLARS */}
            <div className="about_details">
              <div className="about_narrative glass-panel">
                <p className="narrative_text">
                  Backend Software Developer with <strong>2+ years of professional experience</strong> designing and developing secure, scalable and high-performance web apps using <strong>ASP.NET Core, C#, SQL Server, Entity Framework Core and Microsoft Azure technologies.</strong>
                </p>
                <p className="narrative_text">
                  Developed secure <strong>RESTful APIs, implemented JWT authentication and authorization, optimized database and Entity Framework queries, and designed cloud-based backend services with Azure.</strong>
                </p>
                <p className="narrative_text">
                  Follow clean software engineering practices such as <strong>Clean Architecture, Repository Pattern and Dependency Injection, and work closely with React.js to build end-to-end applications. Passionate about Backend Engineering, Cloud Technologies, Scalable Systems and Production-Grade Software Development</strong>
                </p>

                <div className="about_actions_row">
                  <button
                    type="button"
                    className="custom-btn btn-primary"
                    onClick={handlePdfDownload}
                  >
                    <FaDownload size={14} />
                    <span>Download Full Resume</span>
                  </button>

                  <button
                    type="button"
                    className="custom-btn btn-secondary"
                    onClick={handleScrollToContact}
                  >
                    <FaEnvelope size={14} />
                    <span>Let's Connect</span>
                  </button>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="highlights_grid">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="highlight_item glass-panel">
                      <div className="highlight_icon_box">
                        <Icon size={18} />
                      </div>
                      <h4 className="highlight_title">{item.title}</h4>
                      <p className="highlight_desc">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default AboutSection;
