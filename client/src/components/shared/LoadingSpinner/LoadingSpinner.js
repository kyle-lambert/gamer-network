import React from "react";
import "./LoadingSpinner.scss";

function LoadingSpinner(props) {
  return (
    <div className="LoadingSpinner">
      <span className="LoadingSpinner__circle"></span>
    </div>
  );
}

export default LoadingSpinner;
