import {
  SET_PRODUCTS,
  FILTER_PRODUCTS,
  SET_SUGGESTION
} from "../actions/productosActions";

const initialState = {
  listaProductos: [],
  filter: "",
  suggestion: []
};

export const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        listaProductos: action.payload.data
      };

    case FILTER_PRODUCTS:
      return {
        ...state,
        filter: action.payload.data
      };

    case SET_SUGGESTION:
      return {
        ...state,
        suggestion: action.payload.data
      };

    default:
      return state;
  }
};
