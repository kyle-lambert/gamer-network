import { alertTypes } from "../types";

const initState = [];

function alertReducer(state = initState, action) {
  switch (action.type) {
    case alertTypes.ADD_ALERT: {
      return [...state, action.payload];
    }
    case alertTypes.REMOVE_ALERT: {
      return state.filter((alert) => alert.id !== action.payload);
    }
    default: {
      return state;
    }
  }
}

export default alertReducer;
