import React from "react";
import { useDispatch } from "react-redux";
import "./SignUpModal.scss";

import Modal from "../Modal/Modal";
import ModalClose from "../ModalClose/ModalClose";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import FormInputGroup from "../../forms/FormInputGroup/FormInputGroup";
import Button from "../../shared/Button/Button";

import { setSignUpModalAction, setLoginModalAction } from "../../../store/actions/modalActions";
import useOutsideClick from "../../../hooks/useOutsideClick";

function SignUpModal(props) {
  const firstNameRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const dispatch = useDispatch();

  useOutsideClick(modalRef, () => {
    dispatch(setSignUpModalAction(false));
  });

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

  const switchToLoginModal = () => {
    dispatch(setSignUpModalAction(false));
    dispatch(setLoginModalAction(true));
  };

  const closeSignUpModal = () => dispatch(setSignUpModalAction(false));

  return (
    <Modal ref={modalRef}>
      <ModalClose closeModal={closeSignUpModal} />
      <ModalContent>
        <ModalHeader heading="Join Glitch!" subheading="Create an account here" />
        <form className="SignUpModal__form">
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
            <Button primary full>
              Create Account
            </Button>
          </div>
        </form>
      </ModalContent>
      <ModalFooter
        displayCopy="Already have an account?"
        buttonLabel="Login"
        switchAuthModal={switchToLoginModal}
      />
    </Modal>
  );
}

export default SignUpModal;
