import React from "react";
import "./button.scss";

function Button({ children, type, ...rest }) {
  return (
    <button {...rest} data-type={type} className="button">
      {children}
    </button>
  );
}

export default Button;
