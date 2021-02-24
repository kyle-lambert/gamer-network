import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./AccountProfile.scss";

import { updateAccountProfile } from "../../../store/actions/accountActions";

import Button from "../../../components/shared/Button/Button";
import AccountSectionHeader from "../../../components/account/AccountSectionHeader/AccountSectionHeader";

import FormInputGroup from "../../../components/forms/FormInputGroup/FormInputGroup";
import FormTextAreaGroup from "../../../components/forms/FormTextAreaGroup/FormTextAreaGroup";

function AccountProfile(props) {
  const sourceRef = React.useRef(null);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.accountReducer.profile);
  const updateProfileLoading = useSelector((state) => state.accountReducer.updateProfileLoading);
  const [state, setState] = React.useState({
    description: "",
    location: "",
    gamertag: "",
    platform: "",
  });

  React.useEffect(() => {
    return () => {
      if (sourceRef.current !== null) {
        sourceRef.current.cancel();
      }
    };
  }, []);

  React.useEffect(() => {
    setState((prev) => {
      return {
        description: profile?.description || "",
        location: profile?.location || "",
        gamertag: profile?.gamertag || "",
        platform: profile?.platform || "",
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

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    sourceRef.current = axios.CancelToken.source();
    dispatch(updateAccountProfile(sourceRef.current.token, state));
  };

  return (
    <section>
      <AccountSectionHeader
        heading="Edit Profile"
        subheading="Information on your profile is public and available to all other users."
      />
      <form onSubmit={handleUpdateProfile} className="AccountProfile__form">
        <div className="AccountProfile__item AccountProfile__item--description">
          <FormTextAreaGroup
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
          <Button
            type="submit"
            width="set"
            isLoading={updateProfileLoading}
            disabled={updateProfileLoading}
            color="indigo">
            Save changes
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AccountProfile;
