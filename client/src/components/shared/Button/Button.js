import React from "react";
import classNames from "classnames";
import "./Button.scss";

import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

const INITIAL = "Button";

function Button({ children, color, variant, width, isLoading, ...rest }) {
  const classes = classNames(
    INITIAL,
    color && `${INITIAL}--${color}`,
    variant && `${INITIAL}--${variant}`,
    width && `${INITIAL}--${width}`
  );

  return (
    <button {...rest} disabled={isLoading} className={classes}>
      {isLoading ? <ButtonSpinner /> : children}
    </button>
  );
}

export default React.memo(Button);
