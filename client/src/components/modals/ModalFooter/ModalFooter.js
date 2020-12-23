import React from "react";
import "./ModalFooter.scss";

function ModalFooter({ displayCopy, buttonLabel, openModal }) {
  return (
    <footer className="ModalFooter">
      <span className="ModalFooter__copy">{displayCopy}</span>
      <button onClick={openModal} className="ModalFooter__button">
        {buttonLabel}
      </button>
    </footer>
  );
}

export default ModalFooter;
