import React from "react";
import "./FormTextAreaGroup.scss";

import FormTextArea from "../FormTextArea/FormTextArea";

function FormTextAreaGroup({ label, ...rest }, ref) {
  return (
    <>
      {label && <label className="FormTextAreaGroup__label">{label}</label>}
      <FormTextArea ref={ref} {...rest} />
    </>
  );
}

export default React.forwardRef(FormTextAreaGroup);
