import { combineReducers } from "redux";

import authReducer from "../reducers/authReducer";
import modalReducer from "../reducers/modalReducer";
import alertReducer from "../reducers/alertReducer";
import profileReducer from "../reducers/profileReducer";
import postReducer from "../reducers/postReducer";

const rootReducer = combineReducers({
  authReducer,
  modalReducer,
  alertReducer,
  profileReducer,
  postReducer,
});

export default rootReducer;
