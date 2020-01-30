import {
  fetchVentas,
  FETCH_VENTAS,
  setListaVentas
} from "../../actions/ventasActions";
import { api } from "../../actions/apiActions";

import { SELLS_ENDPOINT } from "../../constats";

export const ventasMiddleware = ({ dispatch }) => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_VENTAS:
      dispatch(api(null, "GET", SELLS_ENDPOINT, setListaVentas));
      break;
    default:
      break;
  }
};
