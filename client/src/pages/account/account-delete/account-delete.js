import React from "react";
import "./account-delete.scss";

import SectionHeader from "../../../components/section-header/section-header";
import FormInput from "../../../components/form-input/form-input";
import Button from "../../../components/button/button";

function AccountDelete(props) {
  const passwordRef = React.useRef(null);

  React.useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  return (
    <div className="account-delete">
      <SectionHeader
        header="Delete account"
        text="This action is irreversible and will permanently delete your account."
      />
      <form className="account-delete__form">
        <div className="account-delete__form-group">
          <FormInput ref={passwordRef} label="Password" />
        </div>
        <div className="account-delete__form-submit">
          <Button buttonType="error" buttonSize="large">
            Delete account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AccountDelete;
