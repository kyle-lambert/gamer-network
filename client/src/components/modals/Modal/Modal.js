import React from "react";
import "./Modal.scss";

import ModalLayout from "../ModalLayout/ModalLayout";

function Modal({ children }) {
  const modalRef = React.useRef(null);

  return (
    <ModalLayout>
      <div ref={modalRef} className="Modal">
        {children}
      </div>
    </ModalLayout>
  );
}

export default Modal;
