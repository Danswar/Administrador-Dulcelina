import bcrypt from "bcryptjs";

import { login, LOGIN_INTENT, loginPending } from "../../actions/loginActions";
import { HASH_PASSWORD } from "../../constats";

export const loginMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case LOGIN_INTENT:
      dispatch(loginPending(true));
      if (bcrypt.compareSync(action.payload, HASH_PASSWORD)) {
        dispatch(login());
      }
      dispatch(loginPending(false));
      break;

    default:
      break;
  }
};
