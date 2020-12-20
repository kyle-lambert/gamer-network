import React from "react";
import "./ModalFooter.scss";

function ModalFooter({ displayCopy, buttonLabel }) {
  return (
    <footer className="ModalFooter">
      <span className="ModalFooter__copy">{displayCopy}</span>
      <button className="ModalFooter__button">{buttonLabel}</button>
    </footer>
  );
}

export default ModalFooter;
