import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

import { ReactComponent as GlitchLogo } from "../../assets/icons/glitch-logo.svg";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <Link to="/" className="footer__brand-link">
          <GlitchLogo />
        </Link>
      </div>
      <div className="footer__credits">
        <span className="footer__credits-text">
          &copy; Glitch Network. Designed and built by Kyle Lambert.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
