import React from "react";
import "./FormInput.scss";

function FormInput({ ...props }, ref) {
  return <input {...props} ref={ref} className="FormInput"></input>;
}

export default React.forwardRef(FormInput);
