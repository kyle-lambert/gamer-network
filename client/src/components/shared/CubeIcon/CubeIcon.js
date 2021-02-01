import React from "react";
import "./CubeIcon.scss";

import Icon from "../Icon/Icon";

function CubeIcon({ children }) {
  return (
    <div className="CubeIcon">
      <Icon>{children}</Icon>
    </div>
  );
}

export default CubeIcon;
