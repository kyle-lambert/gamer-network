import { modalTypes } from "../types";

const initState = {
  currentModal: null,
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
    default: {
      return state;
    }
  }
}

export default modalReducer;
