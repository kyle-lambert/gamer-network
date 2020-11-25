import React from "react";
import "./signup-modal.scss";

import Modal from "../../layout/modal/modal";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import { useModalContext } from "../../contexts/modal-context";

const initialState = {
  username: "",
  email: "",
  password: "",
};

function SignupModal(props) {
  const [state, setState] = React.useState(initialState);
  const usernameRef = React.useRef(null);
  const { setLoginModal, setSignupModal } = useModalContext();

  React.useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const switchToLoginModal = () => {
    setSignupModal(false);
    setLoginModal(true);
  };

  const closeModal = () => {
    setSignupModal(false);
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="signup-modal">
        <div className="signup-modal__top">
          <h1 className="signup-modal__header">Join Glitch</h1>
          <div className="signup-modal__subheader">
            Sign up to save your favorite games.
          </div>
          <form onSubmit={handleSubmit} className="signup-modal__form">
            <div className="signup-modal__form-line">
              <FormInput
                ref={usernameRef}
                label="Username"
                name="username"
                value={state.username}
                onChange={handleChange}
                placeholder="steve_jobs"
              />
            </div>
            <div className="signup-modal__form-line">
              <FormInput
                label="Email address"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="stevejobs@gmail.com"
              />
            </div>
            <div className="signup-modal__form-line">
              <FormInput
                label="Password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className="signup-modal__form-line">
              <Button
                buttonType="primary"
                buttonSize="large"
                buttonLayout="full">
                Create account
              </Button>
            </div>
          </form>
        </div>
        <div className="signup-modal__bottom">
          <span className="signup-modal__text">Already registered?</span>
          <button onClick={switchToLoginModal} className="signup-modal__btn">
            Login
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SignupModal;
