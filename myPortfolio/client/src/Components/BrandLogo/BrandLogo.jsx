import React from "react";
import "./BrandLogo.css";

/**
 * Dharshan.dev - Brand Logo & Geometric Architectural Mark
 * 
 * Variants:
 * - "symbol": Just the geometric system mark
 * - "horizontal": Symbol + "dharshan.dev" inline lockup
 * - "vertical": Stacked mark with role subtitle
 * - "favicon": Optimized silhouette for ultra-small sizes (16-32px)
 * 
 * Color Schemes:
 * - "gradient" (Default: Violet #a78bfa -> Purple #8b5cf6 -> Deep Purple #7c3aed)
 * - "white" (Pure white for high contrast)
 * - "dark" (Monochrome dark for light print / resume)
 * - "purple" (Solid brand purple)
 */
export const DharshanSymbol = ({
  size = 30,
  colorScheme = "gradient", // "gradient" | "white" | "dark" | "purple"
  className = "",
  glow = false,
}) => {
  const gradientId = `dharshan-grad-${colorScheme}-${size}`;
  const accentGradId = `dharshan-accent-${colorScheme}-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`dharshan-symbol ${glow ? "has-glow" : ""} ${className}`}
      aria-label="dharshan.dev logo"
    >
      <defs>
        {colorScheme === "gradient" && (
          <>
            <linearGradient id={gradientId} x1="15%" y1="15%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id={accentGradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C4B5FD" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </>
        )}
      </defs>

      {/* Main Structural Mark: Backbone & Gateway 'D' */}
      {colorScheme === "gradient" ? (
        <>
          {/* Vertical Pipeline Backbone */}
          <rect
            x="18"
            y="18"
            width="12"
            height="64"
            rx="6"
            fill={`url(#${gradientId})`}
          />

          {/* Infrastructure Routing Loop (Continuous D-Curve) */}
          <path
            d="M 30 24 
               H 54 
               C 72 24 84 35 84 50 
               C 84 65 72 76 54 76 
               H 30"
            stroke={`url(#${gradientId})`}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Microservice / API Core Node */}
          <circle
            cx="52"
            cy="50"
            r="6.5"
            fill={`url(#${accentGradId})`}
          />

          {/* Precision Flow Pulse Node */}
          <circle
            cx="75"
            cy="36"
            r="2.5"
            fill="#C4B5FD"
            className="pulse-node"
          />
        </>
      ) : (
        // Monochrome / Flat rendering (White, Dark, Purple)
        <g fill={colorScheme === "white" ? "#FFFFFF" : colorScheme === "dark" ? "#080A0F" : "#8B5CF6"}>
          <rect x="18" y="18" width="12" height="64" rx="6" />
          <path
            d="M 30 24 
               H 54 
               C 72 24 84 35 84 50 
               C 84 65 72 76 54 76 
               H 30"
            stroke={colorScheme === "white" ? "#FFFFFF" : colorScheme === "dark" ? "#080A0F" : "#8B5CF6"}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="52" cy="50" r="6.5" />
        </g>
      )}
    </svg>
  );
};

export const BrandLogo = ({
  variant = "horizontal",
  size = 30,
  colorScheme = "gradient",
  glow = false,
  className = "",
  showTagline = false,
}) => {
  if (variant === "symbol") {
    return <DharshanSymbol size={size} colorScheme={colorScheme} glow={glow} className={className} />;
  }

  if (variant === "vertical") {
    return (
      <div className={`brand-lockup vertical ${className}`}>
        <DharshanSymbol size={size * 1.4} colorScheme={colorScheme} glow={glow} />
        <div className="brand-text">
          <div className="brand-name">
            <span className="brand-prefix">dharshan</span>
            <span className="brand-dot">.</span>
            <span className="brand-suffix">dev</span>
          </div>
          <span className="brand-role">SOFTWARE ENGINEER</span>
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup
  return (
    <div className={`brand-lockup horizontal ${className}`}>
      <DharshanSymbol size={size} colorScheme={colorScheme} glow={glow} />
      <div className="brand-text">
        <div className="brand-name">
          <span className="brand-prefix">dharshan</span>
          <span className="brand-dot">.</span>
          <span className="brand-suffix">dev</span>
        </div>
        {showTagline && <span className="brand-role">Software Engineer</span>}
      </div>
    </div>
  );
};

export default BrandLogo;
