import React from "react";
import "./AccountDelete.scss";

import Button from "../../../components/shared/Button/Button";
import AccountSectionHeader from "../../../components/account/AccountSectionHeader/AccountSectionHeader";
import FormInputGroup from "../../../components/forms/FormInputGroup/FormInputGroup";

function AccountDelete(props) {
  const passwordRef = React.useRef(null);
  const [state, setState] = React.useState({
    password: "",
    confirmPassword: "",
  });

  React.useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <section>
      <AccountSectionHeader
        heading="Delete"
        subheading="This action is irreversible and will permanently delete your account"
      />
      <form action="" className="AccountDelete__form">
        <div className="AccountDelete__item AccountDelete__item--password">
          <FormInputGroup
            ref={passwordRef}
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
          <Button color="indigo">Delete account</Button>
        </div>
      </form>
    </section>
  );
}

export default AccountDelete;
