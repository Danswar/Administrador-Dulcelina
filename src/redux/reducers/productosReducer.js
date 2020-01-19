import {
  SET_PRODUCTS,
  SET_FILTER,
  SET_SUGGESTION,
  TOGGLE_MODAL,
} from "../actions/productosActions";

const initialState = {
  listaProductos: [],
  filter: "",
  suggestions: [],
  modalIsOpen: true,
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

    case TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      };

    default:
      return state;
  }
};
