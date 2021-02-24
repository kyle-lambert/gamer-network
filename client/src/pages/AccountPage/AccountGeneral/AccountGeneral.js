import React from "react";
import { useSelector } from "react-redux";
import "./AccountGeneral.scss";

import Button from "../../../components/shared/Button/Button";
import AccountSectionHeader from "../../../components/account/AccountSectionHeader/AccountSectionHeader";
import FormInputGroup from "../../../components/forms/FormInputGroup/FormInputGroup";

function AccountGeneral(props) {
  const profile = useSelector((state) => state.accountReducer.profile);
  const [state, setState] = React.useState({
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  React.useEffect(() => {
    setState((prev) => {
      return {
        ...prev,
        email: profile?.user?.email || "",
      };
    });
  }, [profile]);

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleUpdateCredentials = (e) => {
    e.preventDefault();
    console.log("credentials updated");
  };

  return (
    <section>
      <AccountSectionHeader
        heading="Credentials"
        subheading="Changing these settings will effect how you log into your account"
      />
      <form onSubmit={handleUpdateCredentials} className="AccountGeneral__form">
        <div className="AccountGeneral__item AccountGeneral__item--email">
          <FormInputGroup
            label="Email address"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="stevejobs@gmail.com"
          />
        </div>
        <div className="AccountGeneral__item AccountGeneral__item--current-password">
          <FormInputGroup
            label="Current password"
            name="currentPassword"
            value={state.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div className="AccountGeneral__item AccountGeneral__item--new-password">
          <FormInputGroup
            label="New password"
            name="newPassword"
            value={state.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="AccountGeneral__item AccountGeneral__item--submit">
          <Button type="submit" width="set" color="indigo">
            Save changes
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AccountGeneral;
