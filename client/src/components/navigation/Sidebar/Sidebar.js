import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

import { ReactComponent as UnityLogo } from "../../../assets/unity-logo.svg";

import SidebarNav from "../SidebarNav/SidebarNav";

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="Sidebar__brand">
        <Link to="/dashboard" className="Sidebar__link">
          <UnityLogo />
        </Link>
      </div>
      <SidebarNav />
    </div>
  );
}

export default Sidebar;
