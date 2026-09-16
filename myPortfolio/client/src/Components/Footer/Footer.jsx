import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { DharshanSymbol } from "../BrandLogo/BrandLogo";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { name: "About", targetId: "about" },
    { name: "Projects", targetId: "projects" },
    { name: "Experience", targetId: "experience" },
    { name: "Skills", targetId: "skills" },
    { name: "Education", targetId: "education" },
    { name: "Contact", targetId: "contact" },
  ];

  return (
    <footer className="portfolio_footer">
      <div className="portfolio-container">
        <div className="footer_top">
          {/* Brand & Mission */}
          <div className="footer_brand_col">
            <button
              type="button"
              onClick={scrollToTop}
              className="footer_brand"
              aria-label="dharshan.dev - Back to top"
            >
              <DharshanSymbol size={36} className="footer_logo_icon" glow />
            </button>
            <p className="footer_tagline">
              Software Engineer specializing in Backend Systems, ASP.NET Core, C#, Azure Cloud, and high-performance database architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer_links_col">
            <h4 className="footer_col_title">Navigation</h4>
            <div className="footer_nav_links">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.targetId)}
                  className="footer_nav_link"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="footer_social_col">
            <h4 className="footer_col_title">Connect</h4>
            <div className="footer_social_icons">
              <a
                href="https://github.com/Dharshankuma"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_icon_btn"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/dharshan-m"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_icon_btn"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:dharshankumar.m16@gmail.com"
                className="footer_icon_btn"
                aria-label="Email"
              >
                <IoMdMail size={18} />
              </a>
              <a
                href="https://instagram.com/dharshan__16"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_icon_btn"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer_bottom">
          <p className="footer_copy">
            © {new Date().getFullYear()} M Dharshan. All rights reserved.
          </p>

          {/* <p className="footer_stack_credit">
            Engineered with <span className="credit_tech">React</span> & <span className="credit_tech">Vite</span>
          </p> */}

          <button
            type="button"
            onClick={scrollToTop}
            className="back_to_top_btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <FaArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
