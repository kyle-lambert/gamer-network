import React from "react";
import "./Button.scss";

import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

function Button(props) {
  const { children, outline, full, isLoading, ...rest } = props;

  const getClassNames = () => {
    const output = ["Button"];

    if (outline) output.push("Button--outline");
    if (full) output.push("Button--full");

    return output.join(" ");
  };

  return (
    <button {...rest} disabled={isLoading} className={getClassNames()}>
      {isLoading ? <ButtonSpinner /> : children}
    </button>
  );
}

export default Button;
