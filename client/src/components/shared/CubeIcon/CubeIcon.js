import React from "react";
import "./CubeIcon.scss";

import Icon from "../Icon/Icon";

function CubeIcon({ children, color, size }) {
  return (
    <div className="CubeIcon">
      <Icon color={color} size={size}>
        {children}
      </Icon>
    </div>
  );
}

export default CubeIcon;
