import React from "react";
import "./account-general.scss";

import SectionHeader from "../../../components/section-header/section-header";
import FormInput from "../../../components/form-input/form-input";
import Button from "../../../components/button/button";

function AccountGeneral(props) {
  return (
    <section className="account-general">
      <SectionHeader
        header="Account credentials"
        text="Changing these settings will effect how you log into your account."
      />
      <form className="account-general__form">
        <div className="account-general__form-grid">
          <div className="account-general__form-grid--username">
            <FormInput label="Username" placeholder="steve_jobs" />
          </div>
          <div className="account-general__form-grid--email">
            <FormInput
              label="Email address"
              placeholder="stevejobs@gmail.com"
            />
          </div>
          <div className="account-general__form-grid--current-pw">
            <FormInput label="Current password" />
          </div>
          <div className="account-general__form-grid--new-pw">
            <FormInput label="New password" />
          </div>
        </div>
        <div className="account-general__form-submit">
          <Button style="primary" size="lg">
            Save changes
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AccountGeneral;
