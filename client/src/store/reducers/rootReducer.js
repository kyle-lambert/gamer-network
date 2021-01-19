import { combineReducers } from "redux";

import authReducer from "../reducers/authReducer";
import modalReducer from "../reducers/modalReducer";
import alertReducer from "../reducers/alertReducer";
import profileReducer from "../reducers/profileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  alert: alertReducer,
  profile: profileReducer,
});

export default rootReducer;
