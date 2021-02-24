import React from "react";
import "./AccountDelete.scss";

import Button from "../../../components/shared/Button/Button";
import AccountSectionHeader from "../../../components/account/AccountSectionHeader/AccountSectionHeader";
import FormInputGroup from "../../../components/forms/FormInputGroup/FormInputGroup";

function AccountDelete(props) {
  const [state, setState] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    console.log("account deleted");
  };

  return (
    <section>
      <AccountSectionHeader
        heading="Delete"
        subheading="This action is irreversible and will permanently delete your account"
      />
      <form onSubmit={handleDeleteAccount} className="AccountDelete__form">
        <div className="AccountDelete__item AccountDelete__item--password">
          <FormInputGroup
            label="Password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="AccountDelete__item AccountDelete__item--confirm-password">
          <FormInputGroup
            label="Confirm password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="AccountDelete__item AccountDelete__item--submit">
          <Button type="submit" width="set" color="indigo">
            Delete account
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AccountDelete;
