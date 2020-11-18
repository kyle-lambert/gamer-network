import React from "react";
import { Link } from "react-router-dom";
import "./signup-modal.scss";

import Modal from "../../layout/modal/modal";

function SignupModal(props) {
  return (
    <Modal>
      <div className="signup-modal">
        <div className="signup-modal__top">
          <h1 className="signup-modal__header">Join Glitch</h1>
          <span className="signup-modal__display">
            Sign up to save your favorite games.
          </span>
          <form action="" className="signup-modal__form"></form>
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
