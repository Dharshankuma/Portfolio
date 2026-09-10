import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCheck, FaLayerGroup, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import SectionWrapper from "../../Animations/SectionWrapper";
import { PROJECTS_DATA } from "./ProjectsData";
import "./Projects.css";

const ProjectsSection = () => {
  const projectCount = PROJECTS_DATA.length;

  return (
    <SectionWrapper>
      <section className="projects_section portfolio-section" id="projects">
        <div className="portfolio-container">
          {/* Header */}
          <div className="section_header text-center">
            <span className="section-tag">
              <HiOutlineCodeBracketSquare /> Featured Project{projectCount > 1 ? "s" : ""}
            </span>
            <h2 className="section-title">
              Engineering <span className="gradient-text">Real-World Systems</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Showcase of backend architectures, AI integrations, database optimizations, and full-stack software built for resilience and performance.
            </p>
          </div>

          {/* Dynamic Adaptive Layout */}
          {projectCount === 1 ? (
            /* SINGLE PROJECT - HERO SPOTLIGHT CASE STUDY */
            <div className="single_project_spotlight">
              {PROJECTS_DATA.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="project_spotlight_card glass-panel"
                >
                  {/* Top Bar */}
                  <div className="spotlight_top_bar">
                    <div className="badge_and_category">
                      <span className="project_badge">{project.badge}</span>
                      <span className="project_category">{project.category}</span>
                    </div>

                    <div className="project_links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="custom-btn btn-primary spotlight_cta"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <FaGithub size={16} />
                          <span>View on GitHub</span>
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="custom-btn btn-secondary spotlight_cta"
                          aria-label={`View ${project.title} Live Demo`}
                        >
                          <FaArrowUpRightFromSquare size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="spotlight_title">{project.title}</h3>
                  <p className="spotlight_tagline">{project.tagline}</p>

                  {/* 2-Column Split Content */}
                  <div className="spotlight_body_grid">
                    {/* Left Column */}
                    <div className="spotlight_left_col">
                      <div className="project_problem_box">
                        <span className="box_label">Problem & Solution Overview</span>
                        <p>{project.problemSolved}</p>
                      </div>

                      <div className="project_highlights">
                        <span className="highlights_label">Key Technical Highlights & Capabilities:</span>
                        <ul className="highlights_list">
                          {project.highlights.map((h, i) => (
                            <li key={i}>
                              <FaCheck className="check_icon" size={13} />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="spotlight_right_col">
                      {project.architecture && (
                        <div className="project_arch_box">
                          <div className="arch_header">
                            <FaLayerGroup size={16} className="arch_icon" />
                            <span className="arch_label">Clean Architecture & System Design</span>
                          </div>
                          <p className="arch_text">{project.architecture}</p>
                        </div>
                      )}

                      <div className="spotlight_tech_section">
                        <span className="tech_header_label">Technologies & Frameworks:</span>
                        <div className="project_tech_pills">
                          {project.techStack.map((tech, i) => (
                            <span key={i} className="tech_pill_item spotlight_pill">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* MULTI PROJECT - ADAPTIVE RESPONSIVE GRID */
            <div className={`projects_grid ${projectCount === 2 ? "grid_two_col" : "grid_multi_col"}`}>
              {PROJECTS_DATA.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="project_card glass-panel"
                >
                  <div className="project_card_header">
                    <div className="badge_and_category">
                      <span className="project_badge">{project.badge}</span>
                      <span className="project_category">{project.category}</span>
                    </div>

                    <div className="project_links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project_action_btn"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <FaGithub size={16} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project_action_btn live"
                          aria-label={`View ${project.title} Live Demo`}
                        >
                          <FaArrowUpRightFromSquare size={13} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="project_title">{project.title}</h3>
                  <p className="project_tagline">{project.tagline}</p>

                  <div className="project_problem_box">
                    <span className="box_label">Core Objective & Solution</span>
                    <p>{project.problemSolved}</p>
                  </div>

                  {project.architecture && (
                    <div className="project_arch_box">
                      <div className="arch_header">
                        <FaLayerGroup size={14} className="arch_icon" />
                        <span className="arch_label">Architecture</span>
                      </div>
                      <p className="arch_text">{project.architecture}</p>
                    </div>
                  )}

                  <div className="project_highlights">
                    <span className="highlights_label">Key Technical Highlights:</span>
                    <ul className="highlights_list">
                      {project.highlights.slice(0, 6).map((h, i) => (
                        <li key={i}>
                          <FaCheck className="check_icon" size={12} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project_tech_footer">
                    <div className="project_tech_pills">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech_pill_item">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default ProjectsSection;
