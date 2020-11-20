import React from "react";
import "./account-general.scss";

import SectionHeader from "../../../components/section-header/section-header";

function AccountGeneral(props) {
  return (
    <section className="account-general">
      <form className="account-general__form">
        <SectionHeader header="Full Name" text="Change your full name" />
      </form>
    </section>
  );
}

export default AccountGeneral;
