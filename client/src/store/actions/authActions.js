import { authTypes } from "../types";

export const logoutUser = () => ({
  type: authTypes.LOGOUT_USER,
});
