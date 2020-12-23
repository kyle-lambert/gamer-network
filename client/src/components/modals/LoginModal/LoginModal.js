import React from "react";
import { useDispatch } from "react-redux";
import "./LoginModal.scss";

import Modal from "../Modal/Modal";
import ModalClose from "../ModalClose/ModalClose";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import FormInputGroup from "../../forms/FormInputGroup/FormInputGroup";
import Button from "../../shared/Button/Button";

import { setLoginModalAction, setSignUpModalAction } from "../../../store/actions/modalActions";
import { loginUserAction } from "../../../store/actions/authActions";
import useOutsideClick from "../../../hooks/useOutsideClick";

function LoginModal(props) {
  const emailRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const dispatch = useDispatch();

  useOutsideClick(modalRef, () => {
    dispatch(setLoginModalAction(false));
  });

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      dispatch(loginUserAction(state));
    }
  };

  const switchToSignUpModal = () => {
    dispatch(setLoginModalAction(false));
    dispatch(setSignUpModalAction(true));
  };

  return (
    <Modal ref={modalRef}>
      <ModalClose closeModal={() => dispatch(setLoginModalAction(false))} />
      <ModalContent>
        <ModalHeader heading="Hello!" subheading="Sign into your account here" />
        <form onSubmit={handleSubmit} className="LoginModal__form">
          <div className="LoginModal__form-line">
            <FormInputGroup
              ref={emailRef}
              label="Email address"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="stevejobs@gmail.com"
            />
          </div>
          <div className="LoginModal__form-line">
            <FormInputGroup
              label="Password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="LoginModal__form-line">
            <Button primary full>
              Login
            </Button>
          </div>
        </form>
      </ModalContent>
      <ModalFooter
        displayCopy="Don't have an account?"
        buttonLabel="Sign Up"
        switchAuthModal={switchToSignUpModal}
      />
    </Modal>
  );
}

export default LoginModal;
