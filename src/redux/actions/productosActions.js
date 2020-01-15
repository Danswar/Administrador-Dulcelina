import axios from "axios";
import { FETCH_PRODUCTS } from "../actions/types";

export const fetchProducts = () => dispatch => {
  console.log("fetchProducts");
  axios
    .get("http://store.test/api/products")
    .then(resp => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: resp.data.data
      });
    })
    .catch(err => console.log(err));
};
