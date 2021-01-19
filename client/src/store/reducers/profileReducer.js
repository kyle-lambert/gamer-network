import { profileTypes } from "../types";

const initState = {
  profile: null,
  profileLoading: false,
  profileError: false,
};

// USER_PROFILE_REQUEST => Resets reducer to initial state on every request
function profileReducer(state = initState, action) {
  switch (action.payload) {
    case profileTypes.USER_PROFILE_REQUEST: {
      return {
        profile: null,
        profileLoading: true,
        profileError: false,
      };
    }
    case profileTypes.USER_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: action.payload,
        profileLoading: false,
      };
    }
    case profileTypes.USER_PROFILE_FAILURE: {
      return {
        ...state,
        profileError: true,
      };
    }
  }
}

export default profileReducer;
