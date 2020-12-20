import React from "react";
import "./Icon.scss";

function Icon({ children, primary, secondary }) {
  const getClassNames = () => {
    const output = ["Icon"];

    if (primary) output.push("Icon--primary");
    if (secondary) output.push("Icon--secondary");

    return output.join(" ");
  };

  return <div className={getClassNames()}>{children}</div>;
}

export default Icon;
