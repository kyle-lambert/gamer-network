import React from "react";
import { useSelector } from "react-redux";
import "./Alerts.scss";

function Alerts(props) {
  const alerts = useSelector((state) => state.alert);

  const generateClassNames = ({ type }) => {
    const output = ["Alerts__bar"];

    if (type === "success") output.push("Alerts__bar--green");
    if (type === "error") output.push("Alerts__bar--red");

    return output.join(" ");
  };

  return (
    <ul className="Alerts">
      {alerts.map((alert) => {
        return (
          <li key={alert.id} className={generateClassNames(alert)}>
            <span className="Alerts__msg">{alert.msg}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Alerts;
