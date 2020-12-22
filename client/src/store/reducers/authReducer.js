import { authTypes } from "../types";

const initState = {
  userLoggedIn: true,
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case authTypes.LOGOUT_USER: {
      return {
        ...state,
        userLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
