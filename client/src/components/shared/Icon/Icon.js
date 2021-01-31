import React from "react";
import "./Icon.scss";

function Icon({ children, secondary }) {
  const getClassNames = () => {
    const output = ["Icon"];

    if (secondary) output.push("Icon--secondary");

    return output.join(" ");
  };

  return <div className={getClassNames()}>{children}</div>;
}

export default Icon;
