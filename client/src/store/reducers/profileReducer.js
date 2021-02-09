import { profileTypes } from "../types";

const initState = {
  profile: null,
  profileLoading: false,
  profileError: false,
};

function profileReducer(state = initState, action) {
  switch (action.type) {
    case profileTypes.LOAD_PROFILE_REQUEST: {
      return {
        ...state,
        profileLoading: true,
      };
    }
    case profileTypes.LOAD_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: action.payload,
        profileLoading: false,
      };
    }
    case profileTypes.LOAD_PROFILE_FAILURE: {
      return {
        ...state,
        profileLoading: false,
        profileError: true,
      };
    }
    case profileTypes.INITIALISE_PROFILE_REDUCER: {
      return initState;
    }
    default: {
      return state;
    }
  }
}

export default profileReducer;
