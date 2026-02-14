import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar_content_area">
      <div className="navbar_container_div">
        {/* Logo */}
        <div className="navbar_logo">
          <NavLink to="/" onClick={closeMenu}>
            DHARSHAN
          </NavLink>
        </div>

        {/* Links */}
        <nav className={`navbar_links ${open ? "active" : ""}`}>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
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
