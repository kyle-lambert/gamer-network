import React from "react";
import "./FormTextArea.scss";

function FormTextArea({ ...props }, ref) {
  return <textarea {...props} ref={ref} className="FormTextArea"></textarea>;
}

export default React.forwardRef(FormTextArea);
