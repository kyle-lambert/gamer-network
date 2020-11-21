import React from "react";
import "./account-profile.scss";

import SectionHeader from "../../../components/section-header/section-header";
import FormInput from "../../../components/form-input/form-input";
import Button from "../../../components/button/button";

const initialState = {
  fullName: "",
  location: "",
  description: "",
  gamertag: "",
  platform: "",
};

function AccountProfile(props) {
  const fullNameRef = React.useRef(null);
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    if (fullNameRef.current) {
      fullNameRef.current.focus();
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
    <section className="account-profile">
      <SectionHeader
        header="About you"
        text="Information or your profile is public and available to all other users."
      />
      <form className="account-profile__form">
        <div className="account-profile__form-grid">
          <div className="account-profile__form-grid--fullname">
            <FormInput
              ref={fullNameRef}
              label="Full name"
              name="fullName"
              value={state.fullName}
              onChange={handleChange}
              placeholder="Steve Jobs"
            />
          </div>
          <div className="account-profile__form-grid--location">
            <FormInput
              label="Location"
              name="location"
              value={state.location}
              onChange={handleChange}
              placeholder="Australia"
            />
          </div>
          <div className="account-profile__form-grid--description">
            <FormInput
              label="Description"
              name="description"
              value={state.description}
              onChange={handleChange}
              placeholder="I play video games daily."
            />
          </div>
          <div className="account-profile__form-grid--gamertag">
            <FormInput
              label="Gamertag"
              name="gamertag"
              value={state.gamertag}
              onChange={handleChange}
              placeholder="stevejobs123"
            />
          </div>
          <div className="account-profile__form-grid--playform">
            <FormInput
              label="Platform"
              name="platform"
              value={state.platform}
              onChange={handleChange}
              placeholder="Playstation"
            />
          </div>
        </div>
        <div className="account-profile__form-submit">
          <Button buttonType="primary" buttonSize="large">
            Save changes
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AccountProfile;
