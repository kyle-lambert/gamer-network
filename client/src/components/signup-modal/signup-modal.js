import React from "react";
import "./signup-modal.scss";

import Modal from "../../layout/modal/modal";
import FormInput from "../form-input/form-input";

import { useModalContext } from "../../contexts/modal-context";

function SignupModal(props) {
  const inputRef = React.useRef(null);
  const { setLoginModal, setSignupModal } = useModalContext();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleSignupClick = () => {
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
          <span className="signup-modal__display">
            Sign up to save your favorite games.
          </span>
          <form onSubmit={handleSubmit} className="signup-modal__form">
            <div className="signup-modal__form-line">
              <FormInput
                ref={inputRef}
                label="Full name"
                placeholder="Mark Zuckerburg"
              />
            </div>
            <div className="signup-modal__form-line">
              <FormInput label="Email" placeholder="markzuckerburg@gmail.com" />
            </div>
            <div className="signup-modal__form-line">
              <FormInput label="Password" />
            </div>
            <div className="signup-modal__form-line">
              <button type="submit" className="login-modal__form-submit">
                Create account
              </button>
            </div>
          </form>
        </div>
        <div className="signup-modal__bottom">
          <span className="signup-modal__text">Already registerd?</span>
          <button onClick={handleSignupClick} className="signup-modal__btn">
            Log in
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SignupModal;
