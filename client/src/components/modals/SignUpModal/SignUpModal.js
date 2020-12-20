import React from "react";
import "./SignUpModal.scss";

import Modal from "../Modal/Modal";
import ModalClose from "../ModalClose/ModalClose";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import FormInputGroup from "../../forms/FormInputGroup/FormInputGroup";
import Button from "../../shared/Button/Button";

function SignUpModal(props) {
  const usernameRef = React.useRef(null);
  const [state, setState] = React.useState({
    username: "",
    lastName: "",
    email: "",
    password: "",
  });

  React.useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
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

  return (
    <Modal>
      <ModalClose />
      <ModalContent>
        <ModalHeader heading="Join Glitch!" subheading="Create an account here" />
        <form className="SignUpModal__form">
          <div className="SignUpModal__form-line">
            <FormInputGroup
              ref={usernameRef}
              label="Username"
              name="username"
              value={state.username}
              onChange={handleChange}
              placeholder="SteveJobs123"
            />
          </div>
          <div className="SignUpModal__form-line">
            <FormInputGroup
              label="Email address"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="stevejobs@gmail.com"
            />
          </div>
          <div className="SignUpModal__form-line">
            <FormInputGroup
              label="Password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="SignUpModal__form-line">
            <Button primary full>
              Sign in
            </Button>
          </div>
        </form>
      </ModalContent>
      <ModalFooter displayCopy="Already have an account?" buttonLabel="Login" />
    </Modal>
  );
}

export default SignUpModal;
