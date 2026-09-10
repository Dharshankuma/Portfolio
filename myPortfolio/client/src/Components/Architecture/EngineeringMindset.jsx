import React from "react";
import { FaSitemap, FaCodeBranch, FaGaugeHigh, FaCloudArrowUp } from "react-icons/fa6";
import { HiOutlineCpuChip } from "react-icons/hi2";
import SectionWrapper from "../../Animations/SectionWrapper";
import "./EngineeringMindset.css";

const EngineeringMindset = () => {
  const steps = [
    {
      step: "01",
      icon: FaSitemap,
      title: "Domain & Schema Modeling",
      description:
        "Designing relational entity relationships, table structures, and indexing strategies in SQL Server before writing application logic.",
      tags: ["Data Modeling", "ER Diagrams", "Normalization"],
    },
    {
      step: "02",
      icon: FaCodeBranch,
      title: "Clean API Engineering",
      description:
        "Implementing clean architecture in ASP.NET Core & C# with decoupled services, repository patterns, and claims-based JWT security.",
      tags: ["Clean Architecture", "REST Standards", "JWT Auth"],
    },
    {
      step: "03",
      icon: FaGaugeHigh,
      title: "Optimization & Query Tuning",
      description:
        "Analyzing execution plans, eliminating bottlenecks, applying caching, and benchmarking endpoint latencies for high concurrency.",
      tags: ["Execution Plans", "Indexing", "Caching"],
    },
    {
      step: "04",
      icon: FaCloudArrowUp,
      title: "Cloud & Enterprise Deploy",
      description:
        "Deploying services to Microsoft Azure (App Service, Functions), configuring environment secrets, and wiring SPFx business workflows.",
      tags: ["Microsoft Azure", "SPFx Integration", "CI/CD"],
    },
  ];

  return (
    <SectionWrapper>
      <section className="mindset_section portfolio-section" id="architecture">
        <div className="portfolio-container">
          {/* Section Header */}
          <div className="section_header text-center">
            <span className="section-tag">
              <HiOutlineCpuChip /> Engineering Mindset
            </span>
            <h2 className="section-title">
              How I Architect & <span className="gradient-text">Build Systems</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A structured, principle-driven methodology for building reliable software — from architectural blueprints to production deployment.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="mindset_grid">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="mindset_card glass-panel">
                  <div className="step_number_badge">{item.step}</div>
                  <div className="mindset_icon_wrapper">
                    <Icon size={20} />
                  </div>
                  <h3 className="mindset_title">{item.title}</h3>
                  <p className="mindset_desc">{item.description}</p>
                  <div className="mindset_tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="mindset_tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default EngineeringMindset;
