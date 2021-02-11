import React from "react";
import classNames from "classnames";
import "./CircleIcon.scss";

import Icon from "../Icon/Icon";

const INITIAL = "CircleIcon";

function CircleIcon({ children, circleColor, iconColor, iconSize }) {
  const classes = classNames(INITIAL, circleColor && `${INITIAL}--${circleColor}`);
  return (
    <div className={classes}>
      <Icon color={iconColor} size={iconSize}>
        {children}
      </Icon>
    </div>
  );
}

export default CircleIcon;
