import {
  SET_PRODUCTS,
  SET_FILTER,
  SET_SUGGESTION
} from "../actions/productosActions";

const initialState = {
  listaProductos: [],
  filter: "",
  suggestions: []
};

export const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        listaProductos: action.payload.data
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    case SET_SUGGESTION:
      return {
        ...state,
        suggestions: action.payload
      };

    default:
      return state;
  }
};
