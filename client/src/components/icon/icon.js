import React from "react";
import "./icon.scss";

import { ReactComponent as Gamertag } from "../../assets/icons/gamertag.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";

const icons = {
  gamertag: <Gamertag />,
  location: <Location />,
};

function Icon({ iconName }) {
  return <div className="icon">{icons[iconName]}</div>;
}

export default Icon;
