import React from "react";
import "./Button.scss";

import { buildClassNamesFromProps } from "../../../utils/helpers";

import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

function Button({ children, outline, full, isLoading, ...rest }) {
  return (
    <button
      {...rest}
      disabled={isLoading}
      className={buildClassNamesFromProps("Button", { outline, full })}>
      {isLoading ? <ButtonSpinner /> : children}
    </button>
  );
}

export default Button;
