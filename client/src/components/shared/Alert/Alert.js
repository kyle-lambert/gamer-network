import React from "react";
import classNames from "classnames";
import "./Alert.scss";

const INITIAL = "Alert";

function Alert({ alert }) {
  const classes = classNames(
    INITIAL,
    alert.type === "success" && `${INITIAL}--success`,
    alert.type === "error" && `${INITIAL}--error`
  );
  return (
    <li className={classes}>
      <span className="Alert__msg">{alert.msg}</span>
    </li>
  );
}

export default Alert;
