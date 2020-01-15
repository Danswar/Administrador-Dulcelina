import { FETCH_PRODUCTS } from "../actions/types";

const productos = [];

export default function(state = productos, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;

    default:
      return state;
  }
}
