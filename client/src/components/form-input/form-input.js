import React from "react";
import "./form-input.scss";

function FormInput({ label, ...rest }, ref) {
  return (
    <>
      {label && <label className="form-input__label">{label}</label>}
      <input {...rest} ref={ref} className="form-input__input" />
    </>
  );
}

export default React.forwardRef(FormInput);
