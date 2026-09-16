import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../Context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      className={`theme_toggle_btn ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className={`theme_icon_wrap ${isDark ? "dark" : "light"}`}>
        {isDark ? (
          <FiMoon className="theme_icon moon" />
        ) : (
          <FiSun className="theme_icon sun" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
