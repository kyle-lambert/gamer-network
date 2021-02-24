import React from "react";
import "./FormInputGroup.scss";

import FormInput from "../FormInput/FormInput";

function FormInputGroup({ label, ...rest }, ref) {
  return (
    <>
      {label && <label className="FormInputGroup__label">{label}</label>}
      <FormInput ref={ref} {...rest} autoComplete="nope" />
    </>
  );
}

export default React.forwardRef(FormInputGroup);
