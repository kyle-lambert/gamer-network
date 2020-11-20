import React from "react";
import "./account-delete.scss";

import SectionHeader from "../../../components/section-header/section-header";
import FormInput from "../../../components/form-input/form-input";
import Button from "../../../components/button/button";

function AccountDelete(props) {
  return (
    <div className="account-delete">
      <SectionHeader
        header="Delete account"
        text="This action is irreversible and will permanently delete your account."
      />
      <form className="account-delete__form">
        <div className="account-delete__form-group">
          <FormInput label="Password" />
        </div>
        <div className="account-delete__form-submit">
          <Button style="error" size="lg">
            Delete account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AccountDelete;
