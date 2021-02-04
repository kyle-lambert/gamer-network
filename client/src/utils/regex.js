import { ReactReduxContext } from "react-redux";

export const validateEmail = (email) => {
  if (!email) return false;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(email);
};
