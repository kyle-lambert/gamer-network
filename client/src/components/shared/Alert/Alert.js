import React from "react";
import classNames from "classnames";
import "./Alert.scss";

const INITIAL = "Alert";

function Alert({ alert }) {
  const classes = classNames(INITIAL, alert.isError ? `${INITIAL}--error` : `${INITIAL}--success`);
  return (
    <li className={classes}>
      <span className="Alert__msg">{alert.message}</span>
    </li>
  );
}

export default Alert;
