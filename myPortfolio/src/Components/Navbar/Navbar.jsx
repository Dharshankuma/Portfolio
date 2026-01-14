import { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar_content_area">
      <div className="navbar_container_div">
        {/* Logo */}
        <div className="navbar_logo">
          <a href="#home">DHARSHAN</a>
        </div>

        {/* Desktop Links */}
        <nav className={`navbar_links ${open ? "active" : ""}`}>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>
          {/*
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          */}
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>

        {/* Mobile Icon */}
        <button
          className={`menu_icon ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <FiMenu className="icon menu" />
          <FiX className="icon close" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
