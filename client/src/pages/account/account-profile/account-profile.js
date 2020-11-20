import React from "react";
import "./account-profile.scss";

import SectionHeader from "../../../components/section-header/section-header";
import FormInput from "../../../components/form-input/form-input";
import Button from "../../../components/button/button";

function AccountProfile(props) {
  return (
    <div className="account-profile">
      <SectionHeader
        header="About you"
        text="Information or your profile is public and available to all other users."
      />
      <form className="account-profile__form">
        <div className="account-profile__form-grid">
          <div className="account-profile__form-grid--fullname">
            <FormInput label="Full name" placeholder="Steve Jobs" />
          </div>
          <div className="account-profile__form-grid--location">
            <FormInput label="Location" placeholder="Australia" />
          </div>
          <div className="account-profile__form-grid--description">
            <FormInput
              label="Description"
              placeholder="I play video games daily."
            />
          </div>
          <div className="account-profile__form-grid--gamertag">
            <FormInput label="Gamertag" placeholder="NRG_Ace" />
          </div>
          <div className="account-profile__form-grid--playform">
            <FormInput label="Platform" placeholder="Playstation" />
          </div>
        </div>
        <div className="account-profile__form-submit">
          <Button style="primary" size="lg">
            Save changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AccountProfile;
