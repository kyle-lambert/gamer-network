import React from "react";
import "./AccountProfile.scss";

import Button from "../../../components/shared/Button/Button";
import AccountSectionHeader from "../../../components/account/AccountSectionHeader/AccountSectionHeader";
import FormInputGroup from "../../../components/forms/FormInputGroup/FormInputGroup";

function AccountProfile(props) {
  const descriptionRef = React.useRef(null);
  const [state, setState] = React.useState({
    description: "",
    location: "",
    gamertag: "",
    platform: "",
  });

  React.useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.focus();
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
        heading="Edit Profile"
        subheading="Information on your profile is public and available to all other users."
      />
      <form action="" className="AccountProfile__form">
        <div className="AccountProfile__item AccountProfile__item--description">
          <FormInputGroup
            ref={descriptionRef}
            label="Description"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
        </div>
        <div className="AccountProfile__item AccountProfile__item--location">
          <FormInputGroup
            label="Location"
            name="location"
            value={state.location}
            onChange={handleChange}
            placeholder="Adelaide, Australia"
          />
        </div>
        <div className="AccountProfile__item AccountProfile__item--gamertag">
          <FormInputGroup
            label="Gamertag"
            name="gamertag"
            value={state.gamertag}
            onChange={handleChange}
            placeholder="NRG_Lulu"
          />
        </div>
        <div className="AccountProfile__item AccountProfile__item--platform">
          <FormInputGroup
            label="Platform"
            name="platform"
            value={state.platform}
            onChange={handleChange}
            placeholder="Playstation 4"
          />
        </div>
        <div className="AccountProfile__item AccountProfile__item--submit">
          <Button>Save changes</Button>
        </div>
      </form>
    </section>
  );
}

export default AccountProfile;
