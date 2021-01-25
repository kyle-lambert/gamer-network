import React from "react";
import "./Button.scss";

import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

function Button(props) {
  const { children, indigo, outline, full, isLoading, ...rest } = props;

  const getClassNames = () => {
    const output = ["Button"];

    if (indigo) output.push("Button--indigo");
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
