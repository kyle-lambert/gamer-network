import React from "react";
import "./button.scss";

function Button(props) {
  const { children, buttonType, buttonSize, buttonLayout, ...rest } = props;

  const buildClassNamesStr = () => {
    const classNames = ["button"];

    if (buttonType === "primary") classNames.push("button--primary");
    if (buttonType === "error") classNames.push("button--error");
    if (buttonType === "success") classNames.push("button--success");
    if (buttonSize === "large") classNames.push("button--large");
    if (buttonLayout === "full") classNames.push("button--full");

    return classNames.join(" ");
  };

  const classNames = buildClassNamesStr();

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
