import React from "react";
import classNames from "classnames";
import "./FormInputGroup.scss";

const INITIAL = "FormInputGroup__input";

function FormInputGroup({ label, valid, ...rest }, ref) {
  const classes = classNames(
    INITIAL,
    valid && valid === -1 && `${INITIAL}--invalid`,
    valid && valid === 1 && `${INITIAL}--valid`
  );

  return (
    <>
      {label && <label className="FormInputGroup__label">{label}</label>}
      <input {...rest} ref={ref} autoComplete="nope" className={classes} />
    </>
  );
}

export default React.forwardRef(FormInputGroup);
