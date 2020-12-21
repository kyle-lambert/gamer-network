import { modalTypes } from "../types";

const initState = {
  loginModalOpen: false,
  signUpModalOpen: false,
};

function modalReducer(state = initState, action) {
  switch (action.type) {
    case modalTypes.SET_LOGIN_MODAL: {
      return {
        ...state,
        loginModalOpen: action.payload,
      };
    }
    case modalTypes.SET_SIGN_UP_MODAL: {
      return {
        ...state,
        signUpModalOpen: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default modalReducer;
