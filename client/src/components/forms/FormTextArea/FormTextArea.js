import React from "react";
import "./FormTextArea.scss";

function FormTextArea({ rows = 3, placeholder }, ref) {
  return (
    <textarea ref={ref} rows={rows} placeholder={placeholder} className="FormTextArea"></textarea>
  );
}

export default React.forwardRef(FormTextArea);
