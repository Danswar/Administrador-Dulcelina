import { LOGIN, LOGOUT } from "../actions/loginActions";

const isDev = process.env.REACT_APP_USE_ENV_CONFIG || false;

const initialState = {
  isLoggedIn: isDev,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}
