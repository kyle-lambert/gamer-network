import React from "react";

const ModalStateContext = React.createContext();
const ModalDispatchContext = React.createContext();

const initState = {
  loginModalOpen: false,
  signupModalOpen: false,
};

const types = {
  SET_LOGIN_MODAL: "SET_LOGIN_MODAL",
  SET_SIGNUP_MODAL: "SET_SIGNUP_MODAL",
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case types.SET_LOGIN_MODAL: {
      return {
        ...state,
        loginModalOpen: action.payload,
      };
    }
    case types.SET_SIGNUP_MODAL: {
      return {
        ...state,
        signupModalOpen: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

function ModalContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(modalReducer, initState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

function useModalContext() {
  const state = React.useContext(ModalStateContext);
  const dispatch = React.useContext(ModalDispatchContext);

  const setLoginModal = (bool) => {
    dispatch({ type: types.SET_LOGIN_MODAL, payload: bool });
  };

  const setSignupModal = (bool) => {
    dispatch({ type: types.SET_SIGNUP_MODAL, payload: bool });
  };

  return {
    state,
    setLoginModal,
    setSignupModal,
  };
}

export { ModalContextProvider, useModalContext };
