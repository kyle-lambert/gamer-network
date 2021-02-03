import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./LinkButton.scss";

const INITIAL = "LinkButton";

function LinkButton({ children, variant, width, color, ...rest }) {
  const classes = classNames(
    INITIAL,
    color && `${INITIAL}--${color}`,
    width && `${INITIAL}--${width}`,
    variant && `${INITIAL}--${variant}`
  );
  return (
    <Link {...rest} className={classes}>
      {children}
    </Link>
  );
}

export default LinkButton;
