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
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                  src="/images/Aboutme.png"
                  alt="Dharshan Muthukumar"
                  className="about_img"
                />
                <div className="img_overlay"></div>
              </div>

              <div className="about_quick_info">
                <h3 className="profile_name">Dharshan Muthukumar</h3>
                <p className="profile_role">Software Developer · Backend Specialist</p>
                <div className="profile_meta">
                  <span>📍 Chennai, India</span>
                  <span>🎓 MCA (2025–2027)</span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT & PILLARS */}
            <div className="about_details">
              <div className="about_narrative glass-panel">
                <h3 className="narrative_heading">Backend Specialist with a Full-Stack Perspective</h3>
                <p className="narrative_text">
                  I am a results-driven Software Developer with <strong>2+ years of production experience</strong> creating robust backend systems, high-concurrency RESTful APIs, and cloud-integrated solutions.
                </p>
                <p className="narrative_text">
                  My core specialization centers on <strong>ASP.NET Core, C#, and Microsoft SQL Server</strong>, with a focus on database query optimization, indexing strategies, and clean service architectures across enterprise applications.
                </p>
                <p className="narrative_text">
                  While my foundation is deeply anchored in backend engineering, I frequently build reactive frontends with <strong>React.js and modern JavaScript</strong>, ensuring seamless full-stack integrations from database layer to user interface.
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
