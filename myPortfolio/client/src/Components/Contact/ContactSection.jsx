import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaLocationDot, FaCopy, FaCheck } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import SectionWrapper from "../../Animations/SectionWrapper";
import "./Contact.css";

const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "muthukumardharshan50@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <SectionWrapper>
      <section className="contact_section portfolio-section" id="contact">
        <div className="portfolio-container">
          {/* Header */}
          <div className="section_header text-center">
            <span className="section-tag">
              <HiOutlineChatBubbleLeftRight /> Get In Touch
            </span>
            <h2 className="section-title">
              Let's Build Something <span className="gradient-text">Meaningful</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Open for full-time software engineering roles, backend architecture collaborations, and technical opportunities. Let's start a conversation.
            </p>
          </div>

          <div className="contact_grid">
            {/* Contact Info Card */}
            <div className="contact_info_panel glass-panel">
              <h3 className="info_card_title">Direct Contact & Channels</h3>
              <p className="info_card_subtitle">
                Feel free to email me directly or connect via LinkedIn & GitHub. I typically respond within 24 hours.
              </p>

              <div className="contact_items_list">
                {/* Email Item */}
                <div className="contact_info_item">
                  <div className="contact_icon_badge">
                    <IoMdMail size={20} />
                  </div>
                  <div className="contact_item_text">
                    <label>Email Address</label>
                    <a href={`mailto:${emailAddress}`} className="contact_email_link">
                      {emailAddress}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="copy_email_btn"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <FaCheck className="copied" size={14} /> : <FaCopy size={14} />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact_info_item">
                  <div className="contact_icon_badge">
                    <FaLocationDot size={18} />
                  </div>
                  <div className="contact_item_text">
                    <label>Location</label>
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                </div>

                {/* Work Status Item */}
                <div className="contact_info_item">
                  <div className="contact_icon_badge">
                    <span className="live_indicator_dot"></span>
                  </div>
                  <div className="contact_item_text">
                    <label>Status</label>
                    <span className="status_highlight">Available for Software Engineer Roles</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact_social_section">
                <span className="social_section_label">Social & Developer Profiles</span>
                <div className="contact_social_links">
                  <a
                    href="https://github.com/Dharshankuma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_social_btn"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dharshan-muthukumar-24656a1ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_social_btn"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/__dharshan_muthukumar__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_social_btn"
                    aria-label="Instagram Profile"
                  >
                    <FaInstagram size={18} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default ContactSection;
