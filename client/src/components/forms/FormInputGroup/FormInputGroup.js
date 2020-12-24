import React from "react";
import "./FormInputGroup.scss";

function FormInputGroup({ label, ...rest }, ref) {
  return (
    <>
      {label && <label className="FormInputGroup__label">{label}</label>}
      <input {...rest} ref={ref} autoComplete="nope" className="FormInputGroup__input" />
    </>
  );
}

export default React.forwardRef(FormInputGroup);
