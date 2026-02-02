import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "../ReusableUI/Button/Button";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPolishing, setIsPolishing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Required";

    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Required";

    if (!formData.message.trim()) newErrors.message = "Required";

    setErrors(newErrors);
    console.log(errors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  /* ⚠️ TEMPORARY POLISH (frontend-safe) */
  const handlePolish = async () => {
    if (!formData.message.trim()) return;

    setIsPolishing(true);

    // Simulated polish (safe for frontend)
    setTimeout(() => {
      setIsPolishing(false);
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="contact_section">
      <div className="container-fluid">
        {/* Header */}
        <div className="contact-header text-center">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-subtitle">
            Have a project in mind or just want to chat about tech? Feel free to
            reach out for collaboration or opportunities.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {/* LEFT: Contact Info */}
          <div className="col-lg-4">
            <div className="custom-card">
              <h2 className="info-title">Let's connect</h2>

              <div className="info-item">
                <div className="icon-badge">
                  <IoMdMail />
                </div>
                <div className="info-content">
                  <label>Email</label>
                  <span>muthukumardharshan50@gmail.com</span>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-badge">
                  <FaLocationDot />
                </div>
                <div className="info-content">
                  <label>Location</label>
                  <span>Chennai, TamilNadu, India</span>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="col-lg-7">
            <div className="custom-card">
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label-custom">
                      Full Name <span className="error_mand">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder=""
                      className={`input-custom ${errors.fullName ? "border-dark" : ""}`}
                    />
                    {errors.fullName && (
                      <div className="error-msg">{errors.fullName}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-custom">
                      Email Address <span className="error_mand">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=""
                      className={`input-custom ${errors.email ? "border-dark" : ""}`}
                    />
                    {errors.email && (
                      <div className="error-msg">{errors.email}</div>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label-custom">
                    Subject <span className="error_mand">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about software development"
                    className={`input-custom ${errors.email ? "border-dark" : ""}`}
                  />
                  {errors.subject && (
                    <div className="error-msg">{errors.subject}</div>
                  )}
                </div>

                <div className="mb-4">
                  <div className="label-wrapper">
                    <label className="form-label-custom">
                      Message <span className="error_mand">*</span>
                    </label>
                    {/*
                    <button
                      type="button"
                      onClick={handlePolish}
                      disabled={isPolishing || !formData.message.trim()}
                      className="btn-polish"
                    >
                      {isPolishing ? "Polishing..." : "✨ AI Polish"}
                    </button>
                    */}
                  </div>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className={`input-custom ${errors.message ? "border-dark" : ""}`}
                    style={{ resize: "none" }}
                  ></textarea>
                  {errors.message && (
                    <div className="error-msg">{errors.message}</div>
                  )}
                </div>

                <Button
                  type={"submit"}
                  disabled={isSubmitting}
                  className={"type_3_btn"}
                  label={isSubmitting ? "Sending...." : "Send Message"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
