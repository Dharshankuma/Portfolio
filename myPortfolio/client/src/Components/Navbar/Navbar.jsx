import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiFileText, FiArrowUpRight } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  const closeMenu = () => setOpen(false);

  const handleNavClick = (hash) => {
    closeMenu();
    if (location.pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "About", href: "/#about", path: "/about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact", path: "/contact" },
  ];

  return (
    <header className={`navbar_wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar_inner">
        {/* Brand Logo */}
        <Link to="/" onClick={() => handleNavClick("#home")} className="navbar_brand">
          <span className="brand_prefix">dharshan</span>
          <span className="brand_dot">.</span>
          <span className="brand_suffix">dev</span>
        </Link>

        {/* Live Availability Badge (Desktop) */}
        <div className="status_pill d-none d-lg-flex">
          <span className="status_pulse"></span>
          <span className="status_text">Available for Opportunities</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="navbar_nav d-none d-md-flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href.replace("/", ""))}
              className="nav_link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Right Action CTA */}
        <div className="navbar_actions d-none d-md-flex">
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

        {/* Mobile Hamburger Toggle Button */}
        <button
          className={`mobile_toggle d-md-none ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={open}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
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
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href.replace("/", ""))}
                className="mobile_nav_link"
              >
                {link.name}
              </a>
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
