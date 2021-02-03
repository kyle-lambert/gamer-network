import React from "react";
import classNames from "classnames";
import "./ButtonSpinner.scss";

const INITIAL = "ButtonSpinner__circle";

function ButtonSpinner({ color }) {
  const classes = classNames(INITIAL, color && `${INITIAL}--${color}`);
  return (
    <div className="ButtonSpinner">
      <span className={classes}></span>
    </div>
  );
}

export default ButtonSpinner;
