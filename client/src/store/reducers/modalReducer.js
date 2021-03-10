import { modalTypes } from "../types";

const initState = {
  currentModal: null,
  isLogin: true,
};

function modalReducer(state = initState, action) {
  switch (action.type) {
    case modalTypes.SHOW_MODAL: {
      return {
        currentModal: action.payload,
      };
    }
    case modalTypes.HIDE_MODAL: {
      return initState;
    }
    case modalTypes.TOGGLE_LANDING_MODAL: {
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    }
    case modalTypes.INITIALISE_MODAL_REDUCER: {
      return initState;
    }
    default: {
      return state;
    }
  }
}

export default modalReducer;
