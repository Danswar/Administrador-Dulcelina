import { FETCH_DOLAR, unwrapAndSetDolar } from "../../actions/dolarActions";
import { api } from "../../actions/apiActions";
import { DOLAR_ENDPOINT } from "../../constats";

export const dolarMiddleware = ({ dispatch }) => next => action => {
  next(action);
  switch (action.type) {
    case FETCH_DOLAR:
      dispatch(api(null, "GET", DOLAR_ENDPOINT, unwrapAndSetDolar));
      break;

    default:
      break;
  }
};
