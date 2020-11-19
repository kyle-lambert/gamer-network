import React from "react";
import "./form-input.scss";

const FormInput = React.forwardRef((props, ref) => {
  const { label = "No label", ...rest } = props;
  return (
    <>
      <label className="form-input__label">{label}</label>
      <input {...rest} ref={ref} className="form-input__input" />
    </>
  );
});

export default FormInput;
