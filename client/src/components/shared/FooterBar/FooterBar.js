import React from "react";
import { Link } from "react-router-dom";
import "./FooterBar.scss";

import { ReactComponent as GlitchLogo } from "../../../assets/icons/glitch-logo.svg";

function FooterBar(props) {
  return (
    <footer className="FooterBar">
      <div className="FooterBar__brand">
        <Link to="/" className="FooterBar__brand-link">
          <GlitchLogo />
        </Link>
      </div>
      <div className="FooterBar__credits">
        <span className="FooterBar__credits-text">
          &copy; Glitch Network. Designed and built by Kyle Lambert.
        </span>
      </div>
    </footer>
  );
}

export default React.memo(FooterBar);
