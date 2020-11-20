import React from "react";
import "./account-general.scss";

import SectionHeader from "../../../components/section-header/section-header";
import FormInput from "../../../components/form-input/form-input";
import Button from "../../../components/button/button";

const initialState = {
  username: "",
  email: "",
  currentPassword: "",
  newPassword: "",
};

function AccountGeneral(props) {
  const usernameRef = React.useRef(null);
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
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
    <section className="account-general">
      <SectionHeader
        header="Account credentials"
        text="Changing these settings will effect how you log into your account."
      />
      <form className="account-general__form">
        <div className="account-general__form-grid">
          <div className="account-general__form-grid--username">
            <FormInput
              ref={usernameRef}
              label="Username"
              name="username"
              value={state.username}
              onChange={handleChange}
              placeholder="steve_jobs"
            />
          </div>
          <div className="account-general__form-grid--email">
            <FormInput
              label="Email address"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="stevejobs@gmail.com"
            />
          </div>
          <div className="account-general__form-grid--current-pw">
            <FormInput
              label="Current password"
              name="currentPassword"
              value={state.currentPassword}
              onChange={handleChange}
            />
          </div>
          <div className="account-general__form-grid--new-pw">
            <FormInput
              label="New password"
              name="newPassword"
              value={state.newPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="account-general__form-submit">
          <Button buttonType="primary" buttonSize="large">
            Save changes
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AccountGeneral;
