import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.scss";

import { buildClassNamesFromProps } from "../../../utils/helpers";

function LinkButton({ children, outline, full, ...rest }) {
  return (
    <Link {...rest} className={buildClassNamesFromProps("LinkButton", { outline, full })}>
      {children}
    </Link>
  );
}

export default LinkButton;
