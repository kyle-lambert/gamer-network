import React from "react";
import "./page-header.scss";

function PageHeader({ header, subheader }) {
  return (
    <div className="page-header">
      <h1 className="page-header__header">{header}</h1>
      {subheader && <div className="page-header__subheader">{subheader}</div>}
    </div>
  );
}

export default PageHeader;
