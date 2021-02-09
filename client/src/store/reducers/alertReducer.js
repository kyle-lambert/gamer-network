import { alertTypes } from "../types";

const initState = [];

function alertReducer(state = initState, action) {
  switch (action.type) {
    case alertTypes.ALERT_ADDED: {
      return [...state, action.payload];
    }
    case alertTypes.ALERT_REMOVED: {
      return state.filter((alert) => alert.id !== action.payload);
    }
    default: {
      return state;
    }
  }
}

export default alertReducer;
