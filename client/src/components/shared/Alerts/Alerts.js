import React from "react";
import { useSelector } from "react-redux";
import "./Alerts.scss";

import { buildClassNamesFromProps } from "../../../utils/helpers";

function Alerts(props) {
  const alerts = useSelector((state) => state.alert);

  const buildAlertProps = (alert) => {
    if (typeof alert !== "object") return {};
    return alert.type === "success" ? { success: true } : { error: true };
  };

  return (
    <ul className="Alerts">
      {alerts.map((alert) => {
        return (
          <li
            key={alert.id}
            className={buildClassNamesFromProps("Alerts__bar", buildAlertProps(alert))}>
            <span className="Alerts__msg">{alert.msg}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Alerts;
