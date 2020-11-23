import React from "react";
import "./cube-icon.scss";

import Icon from "../../components/icon/icon";

function CubeIcon({ iconName }) {
  return (
    <div className="cube-icon">
      <Icon iconName={iconName} />
    </div>
  );
}

export default CubeIcon;
