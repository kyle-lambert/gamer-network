import React from "react";
import { useSelector } from "react-redux";
import "./Alert.scss";

import Icon from "../Icon/Icon";

import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";

function Alert(props) {
  const alerts = useSelector((state) => state.alert);

  const generateClassNames = ({ type }) => {
    const output = ["Alert__bar"];

    if (type === "success") output.push("Alert__bar--success");
    if (type === "error") output.push("Alert__bar--error");

    return output.join(" ");
  };

  return (
    <ul className="Alert">
      {alerts.map((alert) => {
        return (
          <li key={alert.id} className={generateClassNames(alert)}>
            <span className="Alert__msg">{alert.msg}</span>
            <button className="Alert__remove-btn">
              <Icon>
                <CloseIcon />
              </Icon>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Alert;
