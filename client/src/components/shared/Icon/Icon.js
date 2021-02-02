import React from "react";
import "./Icon.scss";

import { buildClassNamesFromProps } from "../../../utils/helpers";

function Icon({ children, ...rest }) {
  return <div className={buildClassNamesFromProps("Icon", rest)}>{children}</div>;
}

export default Icon;
