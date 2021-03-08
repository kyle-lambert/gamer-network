import React from "react";
import "./ModalHeader.scss";

function ModalHeader({ heading, subheading }) {
  return (
    <header className="ModalHeader">
      <h2 className="ModalHeader__heading">{heading}</h2>
      {subheading && <div className="ModalHeader__subheading">{subheading}</div>}
    </header>
  );
}

export default ModalHeader;
