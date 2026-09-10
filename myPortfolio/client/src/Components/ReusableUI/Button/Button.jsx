import React from "react";
import "./Button.css";

export const Button = ({
  label,
  name,
  className = "",
  type = "button",
  variant = "primary", // primary, secondary, outline, ghost
  icon: Icon,
  iconPosition = "right",
  onClick,
  href,
  target,
  rel,
  download,
  disabled = false,
  children,
}) => {
  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="btn-icon left" />}
      <span className="btn-label">{children || label}</span>
      {Icon && iconPosition === "right" && <Icon className="btn-icon right" />}
    </>
  );

  const combinedClasses = `custom-btn btn-${variant} ${className} ${disabled ? "disabled" : ""}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        id={name}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        download={download}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      id={name}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
