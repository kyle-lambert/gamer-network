import React from "react";
import { Link } from "react-router-dom";
import "./signup-modal.scss";

import Modal from "../../layout/modal/modal";
import FormInput from "../form-input/form-input";

function SignupModal(props) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal>
      <div className="signup-modal">
        <div className="signup-modal__top">
          <h1 className="signup-modal__header">Join Glitch</h1>
          <span className="signup-modal__display">
            Sign up to save your favorite games.
          </span>
          <form className="signup-modal__form">
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
              <button className="login-modal__form-submit">
                Create account
              </button>
            </div>
          </form>
        </div>
        <div className="signup-modal__bottom">
          <span className="signup-modal__text">Already registerd?</span>
          <Link className="signup-modal__link">Log in</Link>
        </div>
      </div>
    </Modal>
  );
}

export default SignupModal;
