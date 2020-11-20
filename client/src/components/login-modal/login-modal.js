import React from "react";
import "./login-modal.scss";

import Modal from "../../layout/modal/modal";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import { useModalContext } from "../../contexts/modal-context";

function LoginModal(props) {
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

  const handleSignupClick = () => {
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
                placeholder="stevejobs@gmail.com"
              />
            </div>
            <div className="login-modal__form-line">
              <FormInput label="Password" />
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
          <button onClick={handleSignupClick} className="login-modal__btn">
            Sign up
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
