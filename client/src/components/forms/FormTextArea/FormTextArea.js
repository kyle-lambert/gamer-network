import React from "react";
import "./FormTextArea.scss";

function FormTextArea({ rows = 3, placeholder, ...rest }, ref) {
  return (
    <textarea
      {...rest}
      ref={ref}
      rows={rows}
      placeholder={placeholder}
      className="FormTextArea"></textarea>
  );
}

export default React.forwardRef(FormTextArea);
