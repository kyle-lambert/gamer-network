import React from "react";
import "./Button.scss";

function Button(props) {
  const { children, primary, secondary, success, error, full, ...rest } = props;

  const getClassNames = () => {
    const output = ["Button"];

    if (primary) output.push("Button--primary");
    if (secondary) output.push("Button--secondary");
    if (success) output.push("Button--success");
    if (error) output.push("Button--error");
    if (full) output.push("Button--full");

    return output.join(" ");
  };

  return (
    <button {...rest} className={getClassNames()}>
      {children}
    </button>
  );
}

export default Button;
