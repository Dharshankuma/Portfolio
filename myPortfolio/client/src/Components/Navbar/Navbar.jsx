import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiFileText, FiArrowUpRight } from "react-icons/fi";
import { DharshanSymbol } from "../BrandLogo/BrandLogo";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", targetId: "about" },
    { name: "Projects", targetId: "projects" },
    { name: "Experience", targetId: "experience" },
    { name: "Skills", targetId: "skills" },
    { name: "Education", targetId: "education" },
    { name: "Contact", targetId: "contact" },
  ];

  // Scroll detection for navbar background elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to detect currently visible section without URL hashes
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.targetId);
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  // Smooth scroll to section without modifying URL
  const scrollToSection = (id) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Smooth scroll to top without modifying URL
  const scrollToTop = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`navbar_wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar_inner">
        {/* Left Section: Standalone Brand Symbol & Live Status */}
        <div className="navbar_left">
          <button
            type="button"
            onClick={scrollToTop}
            className="navbar_brand"
            aria-label="dharshan.dev - Home"
          >
            <DharshanSymbol size={36} glow className="navbar_logo_icon" />
          </button>

          {/* Live Availability Badge (Desktop) */}
          <div className="status_pill d-none d-lg-flex">
            <span className="status_pulse"></span>
            <span className="status_text">Available for Opportunities</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="navbar_nav d-none d-md-flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.targetId)}
              className={`nav_link ${activeSection === link.targetId ? "active" : ""}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Header Right Actions: Theme Toggle + Resume CTA */}
        <div className="navbar_actions d-none d-md-flex">
          <ThemeToggle />
          <a
            href="/pdf/DHARSHAN_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume_btn"
          >
            <FiFileText size={15} />
            <span>Resume</span>
            <FiArrowUpRight size={14} className="arrow_icon" />
          </a>
        </div>

        {/* Mobile Header Right */}
        <div className="mobile_header_actions d-md-none">
          <ThemeToggle className="mobile_theme_btn" />
          <button
            className={`mobile_toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile_drawer ${open ? "active" : ""}`}>
        <div className="mobile_drawer_content">
          <div className="mobile_status_pill">
            <span className="status_pulse"></span>
            <span>Available for Opportunities</span>
          </div>

          <div className="mobile_nav_links">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => scrollToSection(link.targetId)}
                className={`mobile_nav_link ${activeSection === link.targetId ? "active" : ""}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="mobile_drawer_footer">
            <a
              href="/pdf/DHARSHAN_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile_resume_btn"
              onClick={closeMenu}
            >
              <FiFileText size={16} />
              <span>Download Full Resume</span>
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
