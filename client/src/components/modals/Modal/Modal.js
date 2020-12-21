import React from "react";
import "./Modal.scss";

import ModalLayout from "../ModalLayout/ModalLayout";

function Modal({ children }, ref) {
  return (
    <ModalLayout>
      <div ref={ref} className="Modal">
        {children}
      </div>
    </ModalLayout>
  );
}

export default React.forwardRef(Modal);
