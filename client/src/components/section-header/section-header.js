import React from "react";
import "./section-header.scss";

function SectionHeader({ header, text }) {
  return (
    <div className="section-header">
      <h3 className="section-header__header">{header}</h3>
      {text && <div className="section-header__text">{text}</div>}
    </div>
  );
}

export default SectionHeader;
