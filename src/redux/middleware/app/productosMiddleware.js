import {
  FETCH_PRODUCTS,
  PRODUCTS,
  setProducts
} from "../../actions/productosActions";
import { apiRequest, API_SUCCESS } from "../../actions/apiActions";
/* import { setLoader } from "../../actions/uiActions"; */
import { getStore } from 'redux';

import { PRODUCTS_ENDPOINT } from "../../constats";

export const productosMiddleware = ({ dispatch }) => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_PRODUCTS:
      dispatch(apiRequest(null, "GET", PRODUCTS_ENDPOINT, PRODUCTS));
      /* dispatch(setLoader(true)); */
      break;

    case `${PRODUCTS} ${API_SUCCESS}`:
      dispatch(setProducts(action.payload.data));
      /* dispatch(setLoader(false)); */
      break;

    default:
      break;
  }
};

const filtar = (params) => 
