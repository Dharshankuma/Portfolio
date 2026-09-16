import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // 1. Check localStorage first
    const savedTheme = localStorage.getItem("dharshan_theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    // 2. Default to Day / Light mode
    return "light";
  });

  useEffect(() => {
    // Apply data-theme attribute to html element
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("dharshan_theme", theme);

    // Update theme-color meta tag for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme === "dark" ? "#080A0F" : "#FAFAFC");
    }
  }, [theme]);

  // Listen to OS theme changes if user hasn't explicitly set one
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e) => {
      const stored = localStorage.getItem("dharshan_theme");
      if (!stored) {
        setTheme(e.matches ? "light" : "dark");
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
