import React from "react";
import classNames from "classnames";
import "./Icon.scss";

const INITIAL = "Icon";

function Icon({ children, color }) {
  const classes = classNames(INITIAL, color && `${INITIAL}--${color}`);
  return <div className={classes}>{children}</div>;
}

export default Icon;
