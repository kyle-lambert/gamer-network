import React from "react";
import "./AccountSectionHeader.scss";

function AccountSectionHeader({ heading, subheading }) {
  return (
    <header className="AccountSectionHeader">
      <h2 className="AccountSectionHeader__heading">{heading}</h2>
      {subheading && <div className="AccountSectionHeader__subheading">{subheading}</div>}
    </header>
  );
}

export default AccountSectionHeader;
