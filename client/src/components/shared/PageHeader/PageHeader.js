import React from "react";
import "./PageHeader.scss";

function PageHeader({ heading, subheading }) {
  return (
    <header className="PageHeader">
      <h1 className="PageHeader__heading">{heading}</h1>
      {subheading && <div className="PageHeader__subheading">{subheading}</div>}
    </header>
  );
}

export default PageHeader;
