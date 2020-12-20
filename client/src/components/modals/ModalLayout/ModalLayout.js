import React from "react";
import "./ModalLayout.scss";

function ModalLayout({ children }) {
  return (
    <div className="ModalLayout">
      <span className="ModalLayout__backdrop"></span>
      {children}
    </div>
  );
}

export default ModalLayout;
