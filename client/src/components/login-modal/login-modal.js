import React from "react";
import "./login-modal.scss";

import Modal from "../../layout/modal/modal";
import FormInput from "../form-input/form-input";

import { useModalContext } from "../../contexts/modal-context";

function LoginModal(props) {
  const emailRef = React.useRef(null);
  const { setLoginModal, setSignupModal } = useModalContext();

  React.useEffect(() => {
    emailRef.current.focus();
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
          <span className="login-modal__display">
            Sign into your account here.
          </span>
          <form onSubmit={handleSubmit} className="login-modal__form">
            <div className="login-modal__form-line">
              <FormInput
                ref={emailRef}
                label="Email"
                placeholder="markzuckerburg@gmail.com"
              />
            </div>
            <div className="login-modal__form-line">
              <FormInput label="Password" />
            </div>
            <div className="login-modal__form-line">
              <button type="submit" className="login-modal__form-submit">
                Sign in
              </button>
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
