import "./Button.css";

export const Button = ({
  label,
  name,
  className,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`btn common_btn_stl ${className}`}
      onClick={onclick}
      id={name}
    >
      {label}
    </button>
  );
};
