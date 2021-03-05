import React from "react";
import "./PageHeaderAction.scss";

function PageHeaderAction({ heading, subheading, children }) {
  return (
    <header className="PageHeaderAction">
      <div className="PageHeaderAction__content">
        <h1 className="PageHeaderAction__heading">{heading}</h1>
        {subheading && <div className="PageHeaderAction__subheading">{subheading}</div>}
      </div>
      <div className="PageHeaderAction__action">{children}</div>
    </header>
  );
}

export default PageHeaderAction;
