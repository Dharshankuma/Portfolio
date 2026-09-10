import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="portfolio_footer">
      <div className="portfolio-container">
        <div className="footer_top">
          {/* Brand & Mission */}
          <div className="footer_brand_col">
            <Link to="/" onClick={scrollToTop} className="footer_brand">
              <span className="brand_prefix">dharshan</span>
              <span className="brand_dot">.</span>
              <span className="brand_suffix">dev</span>
            </Link>
            <p className="footer_tagline">
              Software Developer specializing in ASP.NET Core, C#, Azure Cloud, and high-performance database architectures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer_links_col">
            <h4 className="footer_col_title">Navigation</h4>
            <div className="footer_nav_links">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer_nav_link">
                  {link.name}
                </a>
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
                href="https://www.linkedin.com/in/dharshan-muthukumar-24656a1ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_icon_btn"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/__dharshan_muthukumar__/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_icon_btn"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="mailto:muthukumardharshan50@gmail.com"
                className="footer_icon_btn"
                aria-label="Email"
              >
                <IoMdMail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer_bottom">
          <p className="footer_copy">
            © {new Date().getFullYear()} Dharshan Muthukumar. All rights reserved.
          </p>

          <p className="footer_stack_credit">
            Engineered with <span className="credit_tech">React 19</span> & <span className="credit_tech">Framer Motion</span>
          </p>

          <button
            type="button"
            className="back_to_top_btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
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
