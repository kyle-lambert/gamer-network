import React from "react";
import classNames from "classnames";
import "./Button.scss";

import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

const INITIAL = "Button";

function Button({ children, variant, width, disabled, isLoading, ...rest }) {
  const classes = classNames(
    INITIAL,
    variant && `${INITIAL}--${variant}`,
    width && `${INITIAL}--${width}`
  );

  return (
    <button {...rest} disabled={disabled || isLoading} className={classes}>
      {isLoading ? <ButtonSpinner /> : children}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
};

export default React.memo(Button);
