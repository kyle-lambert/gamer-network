import React from "react";
import "./modal.scss";

import useOutsideClick from "../../hooks/use-outside-click";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

function Modal({ closeModal, children }) {
  const modalRef = React.useRef(null);

  useOutsideClick(modalRef, () => {
    closeModal();
  });

  return (
    <div className="modal">
      <span className="modal__backdrop"></span>
      <div ref={modalRef} className="modal__inner">
        <div className="modal__close">
          <button onClick={closeModal} className="modal__close-btn">
            <Close />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
