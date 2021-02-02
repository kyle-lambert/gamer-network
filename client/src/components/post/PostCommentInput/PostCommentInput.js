import React from "react";
import "./PostCommentInput.scss";

function PostCommentInput({ ...props }, ref) {
  return <input {...props} ref={ref} type="text" className="PostCommentInput" />;
}

export default React.forwardRef(PostCommentInput);
