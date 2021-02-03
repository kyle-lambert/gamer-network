import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LoginModal.scss";

import Modal from "../Modal/Modal";
import ModalClose from "../ModalClose/ModalClose";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import FormInputGroup from "../../forms/FormInputGroup/FormInputGroup";
import Button from "../../shared/Button/Button";

import { showSignUpModalAction, hideCurrentModalAction } from "../../../store/actions/modalActions";
import { authenticateUserAction } from "../../../store/actions/authActions";

function LoginModal(props) {
  const emailRef = React.useRef(null);
  const dispatch = useDispatch();
  const { authenticationLoading } = useSelector((state) => state.auth);

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
      dispatch(authenticateUserAction(state));
    }
  };

  const openSignUpModal = () => dispatch(showSignUpModalAction());
  const closeLoginModal = () => dispatch(hideCurrentModalAction());

  return (
    <Modal>
      <ModalClose closeModal={closeLoginModal} />
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
            <Button width="full" color="indigo" isLoading={authenticationLoading}>
              Login
            </Button>
          </div>
        </form>
      </ModalContent>
      <ModalFooter
        displayCopy="Don't have an account?"
        buttonLabel="Sign Up"
        openModal={openSignUpModal}
      />
    </Modal>
  );
}

export default LoginModal;
