import React from "react";
import { Link } from "react-router-dom";
import "./login-modal.scss";

import Modal from "../../layout/modal/modal";
import FormInput from "../form-input/form-input";

function LoginModal(props) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal>
      <div className="login-modal">
        <div className="login-modal__top">
          <h1 className="login-modal__header">Hello!</h1>
          <span className="login-modal__display">
            Sign into your account here.
          </span>
          <form className="login-modal__form">
            <div className="login-modal__form-line">
              <FormInput
                ref={inputRef}
                label="Email"
                placeholder="markzuckerburg@gmail.com"
              />
            </div>
            <div className="login-modal__form-line">
              <FormInput label="Password" />
            </div>
            <div className="login-modal__form-line">
              <button className="login-modal__form-submit">Sign in</button>
            </div>
          </form>
        </div>
        <div className="login-modal__bottom">
          <span className="login-modal__text">Don't have an account?</span>
          <Link className="login-modal__link">Sign up</Link>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
