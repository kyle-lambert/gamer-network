import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SignUpModal.scss";

import Modal from "../Modal/Modal";
import ModalClose from "../ModalClose/ModalClose";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import FormInputGroup from "../../forms/FormInputGroup/FormInputGroup";
import Button from "../../shared/Button/Button";

import { showLoginModalAction, hideCurrentModalAction } from "../../../store/actions/modalActions";
import { registerUserAction } from "../../../store/actions/authActions";

function SignUpModal(props) {
  const firstNameRef = React.useRef(null);
  const dispatch = useDispatch();
  const { registerLoading } = useSelector((state) => state.auth);

  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  React.useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.focus();
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

    if (state.firstName && state.lastName && state.email && state.password) {
      dispatch(registerUserAction(state));
    }
  };

  const openLoginModal = () => dispatch(showLoginModalAction());
  const closeSignUpModal = () => dispatch(hideCurrentModalAction());

  return (
    <Modal>
      <ModalClose closeModal={closeSignUpModal} />
      <ModalContent>
        <ModalHeader heading="Join Glitch!" subheading="Create an account here" />
        <form onSubmit={handleSubmit} className="SignUpModal__form">
          <div className="SignUpModal__form-line SignUpModal__form-line--first">
            <FormInputGroup
              ref={firstNameRef}
              label="First name"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              placeholder="Steve"
            />
          </div>
          <div className="SignUpModal__form-line SignUpModal__form-line--last">
            <FormInputGroup
              label="Last name"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              placeholder="Jobs"
            />
          </div>
          <div className="SignUpModal__form-line SignUpModal__form-line--email">
            <FormInputGroup
              label="Email address"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="stevejobs@gmail.com"
            />
          </div>
          <div className="SignUpModal__form-line SignUpModal__form-line--password">
            <FormInputGroup
              label="Password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="SignUpModal__form-line SignUpModal__form-line--submit">
            <Button secondary full isLoading={registerLoading}>
              Create Account
            </Button>
          </div>
        </form>
      </ModalContent>
      <ModalFooter
        displayCopy="Already have an account?"
        buttonLabel="Login"
        openModal={openLoginModal}
      />
    </Modal>
  );
}

export default SignUpModal;
