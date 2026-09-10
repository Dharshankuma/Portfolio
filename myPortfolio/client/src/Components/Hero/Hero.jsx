import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaDownload } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { SiDotnet, SiReact } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbDatabaseSearch } from "react-icons/tb";
import SectionWrapper from "../../Animations/SectionWrapper";
import "./Hero.css";

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePdfDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/DHARSHAN_resume.pdf";
    link.download = "DHARSHAN_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SectionWrapper>
      <section className="hero_section" id="home">
        <div className="portfolio-container">
          <div className="hero_grid">
            {/* LEFT CONTENT COLUMN */}
            <div className="hero_content">
              {/* Status Badge */}
              <div className="hero_badge">
                <HiSparkles className="badge_icon" />
                <span>Software Developer & Backend Engineer</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero_title">
                Building <span className="gradient-text">scalable backend systems</span>, reliable APIs & cloud architectures.
              </h1>

              {/* Subtitle / Value Prop */}
              <p className="hero_description">
                I'm <strong className="text-white">Dharshan Muthukumar</strong>, a software developer with 2+ years of experience designing robust ASP.NET Core services, optimizing high-throughput SQL Server databases, and integrating modern cloud platforms with reactive user interfaces.
              </p>

              {/* Tech Highlight Pills */}
              <div className="hero_tech_highlights">
                <div className="tech_pill">
                  <SiDotnet className="pill_icon dotnet" />
                  <span>ASP.NET Core</span>
                </div>
                <div className="tech_pill">
                  <VscAzure className="pill_icon azure" />
                  <span>Azure Cloud</span>
                </div>
                <div className="tech_pill">
                  <TbDatabaseSearch className="pill_icon sql" />
                  <span>SQL Optimization</span>
                </div>
                <div className="tech_pill">
                  <SiReact className="pill_icon react" />
                  <span>React.js</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="hero_actions">
                <button
                  type="button"
                  className="custom-btn btn-primary"
                  onClick={() => handleScrollTo("#projects")}
                >
                  <span>Explore Projects</span>
                  <FaArrowRight size={14} />
                </button>

                <button
                  type="button"
                  className="custom-btn btn-secondary"
                  onClick={handlePdfDownload}
                >
                  <FaDownload size={14} />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Social Links & Location */}
              <div className="hero_social_bar">
                <span className="social_label">Connect:</span>
                <div className="hero_social_links">
                  <a
                    href="https://github.com/Dharshankuma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero_social_btn"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dharshan-muthukumar-24656a1ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero_social_btn"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/__dharshan_muthukumar__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero_social_btn"
                    aria-label="Instagram Profile"
                  >
                    <FaInstagram size={18} />
                  </a>
                </div>
                <div className="location_tag">
                  <span className="location_dot"></span>
                  <span>Chennai, India</span>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL / IMAGE COLUMN */}
            <div className="hero_visual">
              <div className="visual_card_wrapper">
                {/* Background Glow Ring */}
                <div className="visual_glow"></div>

                {/* Profile Container */}
                <div className="visual_card">
                  <div className="image_wrapper">
                    <img
                      src="/images/Dharshan.png"
                      alt="Dharshan Muthukumar - Software Developer"
                      className="hero_profile_img"
                      loading="eager"
                    />
                  </div>

                  {/* Floating Card 1: Experience */}
                  <motion.div
                    className="floating_badge badge_top"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="floating_badge_icon">⚡</div>
                    <div>
                      <div className="badge_val">2+ Years</div>
                      <div className="badge_lbl">Production Dev</div>
                    </div>
                  </motion.div>

                  {/* Floating Card 2: Core Focus */}
                  <motion.div
                    className="floating_badge badge_bottom"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="floating_badge_icon">🛡️</div>
                    <div>
                      <div className="badge_val">Enterprise APIs</div>
                      <div className="badge_lbl">Clean Architecture</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Hero;
