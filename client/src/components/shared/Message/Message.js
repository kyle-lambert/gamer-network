import React from "react";
import "./Message.scss";

function Message({ message }) {
  return message ? <div className="Message">{message}</div> : null;
}

export default Message;
