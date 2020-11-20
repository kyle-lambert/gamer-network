import React from "react";
import "./button.scss";

function Button({
  children,
  style = "secondary",
  size = "sm",
  width,
  ...rest
}) {
  return (
    <button
      {...rest}
      data-style={style}
      data-size={size}
      data-width={width}
      className="button">
      {children}
    </button>
  );
}

export default Button;
