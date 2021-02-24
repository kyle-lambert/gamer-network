import { accountTypes } from "../types";

const initState = {
  profile: null,
  loadProfileLoading: false,
  updateProfileLoading: false,
  deleteAccountLoading: false,
};

function accountReducer(state = initState, action) {
  switch (action.type) {
    case accountTypes.LOAD_ACCOUNT_PROFILE_REQUEST: {
      return {
        ...state,
        loadProfileLoading: true,
      };
    }
    case accountTypes.LOAD_ACCOUNT_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: action.payload,
        loadProfileLoading: false,
      };
    }
    case accountTypes.LOAD_ACCOUNT_PROFILE_FAILURE: {
      return {
        ...state,
        loadProfileLoading: false,
      };
    }
    case accountTypes.UPDATE_ACCOUNT_PROFILE_REQUEST: {
      return {
        ...state,
        updateProfileLoading: true,
      };
    }
    case accountTypes.UPDATE_ACCOUNT_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: action.payload,
        updateProfileLoading: false,
      };
    }
    case accountTypes.UPDATE_ACCOUNT_PROFILE_FAILURE: {
      return {
        ...state,
        updateProfileLoading: false,
      };
    }
    case accountTypes.DELETE_ACCOUNT_REQUEST: {
      return {
        ...state,
        deleteAccountLoading: true,
      };
    }
    case accountTypes.DELETE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        deleteAccountLoading: false,
      };
    }
    case accountTypes.DELETE_ACCOUNT_FAILURE: {
      return {
        ...state,
        deleteAccountLoading: false,
      };
    }
    case accountTypes.INITIALISE_ACCOUNT_REDUCER: {
      return initState;
    }
    default: {
      return state;
    }
  }
}

export default accountReducer;
