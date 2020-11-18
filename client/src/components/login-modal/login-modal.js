import React from "react";
import { Link } from "react-router-dom";
import "./login-modal.scss";

import Modal from "../../layout/modal/modal";

function LoginModal(props) {
  return (
    <Modal>
      <div className="login-modal">
        <div className="login-modal__top">
          <h1 className="login-modal__header">Hello!</h1>
          <span className="login-modal__display">
            Sign into your account here.
          </span>
          <form action="" className="login-modal__form"></form>
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
