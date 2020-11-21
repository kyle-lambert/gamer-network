import React from "react";
import "./login-modal.scss";

import Modal from "../../layout/modal/modal";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import { useModalContext } from "../../contexts/modal-context";

const initialState = {
  email: "",
  password: "",
};

function LoginModal(props) {
  const [state, setState] = React.useState(initialState);
  const emailRef = React.useRef(null);
  const { setLoginModal, setSignupModal } = useModalContext();

  React.useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
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

  const switchToSignupModal = () => {
    setLoginModal(false);
    setSignupModal(true);
  };

  const closeModal = () => {
    setLoginModal(false);
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="login-modal">
        <div className="login-modal__top">
          <h1 className="login-modal__header">Hello!</h1>
          <div className="login-modal__subheader">
            Sign into your account here.
          </div>
          <form onSubmit={handleSubmit} className="login-modal__form">
            <div className="login-modal__form-line">
              <FormInput
                ref={emailRef}
                label="Email address"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="stevejobs@gmail.com"
              />
            </div>
            <div className="login-modal__form-line">
              <FormInput
                label="Password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className="login-modal__form-line">
              <Button
                buttonType="primary"
                buttonSize="large"
                buttonLayout="full">
                Sign in
              </Button>
            </div>
          </form>
        </div>
        <div className="login-modal__bottom">
          <span className="login-modal__text">Don't have an account?</span>
          <button onClick={switchToSignupModal} className="login-modal__btn">
            Sign up
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
