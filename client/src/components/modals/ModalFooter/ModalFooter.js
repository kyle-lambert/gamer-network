import React from "react";
import "./ModalFooter.scss";

function ModalFooter({ displayCopy, buttonLabel, openModal }) {
  return (
    <footer className="ModalFooter">
      <span className="ModalFooter__copy">{displayCopy}</span>
      {buttonLabel && openModal ? (
        <button onClick={openModal} className="ModalFooter__button">
          {buttonLabel}
        </button>
      ) : null}
    </footer>
  );
}

export default ModalFooter;
