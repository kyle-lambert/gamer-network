import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.scss";

function LinkButton(props) {
  const { children, outline, full, ...rest } = props;

  const getClassNames = () => {
    const output = ["LinkButton"];

    if (outline) output.push("LinkButton--outline");
    if (full) output.push("LinkButton--full");

    return output.join(" ");
  };

  return (
    <Link {...rest} className={getClassNames()}>
      {children}
    </Link>
  );
}

export default LinkButton;
