import React from "react";
import "./ModalFooter.scss";

function ModalFooter({ displayCopy, buttonLabel, switchAuthModal }) {
  return (
    <footer className="ModalFooter">
      <span className="ModalFooter__copy">{displayCopy}</span>
      <button onClick={switchAuthModal} className="ModalFooter__button">
        {buttonLabel}
      </button>
    </footer>
  );
}

export default ModalFooter;
