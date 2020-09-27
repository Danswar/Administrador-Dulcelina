import bcrypt from "bcryptjs";

import { login, LOGIN_INTENT, loginPending } from "../../actions/loginActions";
import { HASH_PASSWORD } from "../../constats";

const isDev = process.env.REACT_APP_USE_ENV_CONFIG || false;

export const loginMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case LOGIN_INTENT:
      dispatch(loginPending(true));
      if (bcrypt.compareSync(action.payload, HASH_PASSWORD) || isDev) {
        dispatch(login());
      }
      dispatch(loginPending(false));
      break;

    default:
      break;
  }
};
