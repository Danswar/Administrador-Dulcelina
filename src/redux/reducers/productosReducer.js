import { SET_PRODUCTS } from '../actions/productosActions';
const productos = [];

export default function(state = productos, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;

    default:
      return state;
  }
}
