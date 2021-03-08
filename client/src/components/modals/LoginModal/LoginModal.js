import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./LoginModal.scss";

import Modal from "../Modal/Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import FormInputGroup from "../../forms/FormInputGroup/FormInputGroup";
import Button from "../../shared/Button/Button";

import { authenticateUser } from "../../../store/actions/authActions";

function LoginModal({ toggleModal }) {
  const emailRef = React.useRef(null);
  const dispatch = useDispatch();
  const sourceRef = React.useRef(null);
  const history = useHistory();
  const { authenticationLoading } = useSelector((state) => state.authReducer);

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    return () => {
      if (sourceRef.current !== null) {
        sourceRef.current.cancel();
      }
    };
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
      sourceRef.current = axios.CancelToken.source();
      dispatch(authenticateUser(state, history));
    }
  };

  return (
    <Modal>
      <ModalContent>
        <ModalHeader heading="Login" subheading="Sign into a your account here" />
        <form onSubmit={handleSubmit}>
          <div className="LoginModal__form">
            <div className="LoginModal__form-line">
              <FormInputGroup
                ref={emailRef}
                label="Email Address"
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
          </div>
          <Button type="submit" width="full" isLoading={authenticationLoading}>
            Login
          </Button>
        </form>
      </ModalContent>
      <ModalFooter
        displayCopy="Don't have an account?"
        buttonLabel="Sign Up"
        openModal={toggleModal}
      />
    </Modal>
  );
}

export default LoginModal;
