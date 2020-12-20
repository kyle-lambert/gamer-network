import React from "react";
import "./ModalHeader.scss";

function ModalHeader({ heading, subheading }) {
  return (
    <header className="ModalHeader">
      <h1 className="ModalHeader__heading">{heading}</h1>
      <div className="ModalHeader__subheading">{subheading}</div>
    </header>
  );
}

export default ModalHeader;
