import React from "react";
import classNames from "classnames";
import "./Icon.scss";

const INITIAL = "Icon";

function Icon({ children, color, size }) {
  const classes = classNames(
    INITIAL,
    color && `${INITIAL}--${color}`,
    size && `${INITIAL}--${size}`
  );
  return <div className={classes}>{children}</div>;
}

export default Icon;
