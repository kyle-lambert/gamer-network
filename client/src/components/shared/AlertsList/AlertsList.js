import React from "react";
import { useSelector } from "react-redux";
import "./AlertsList.scss";

import Alert from "../Alert/Alert";

function AlertsList(props) {
  const alerts = useSelector((state) => state.alertReducer);

  return (
    <ul className="AlertsList">
      {alerts.map((alert) => {
        return <Alert key={alert.id} alert={alert} />;
      })}
    </ul>
  );
}

export default AlertsList;
