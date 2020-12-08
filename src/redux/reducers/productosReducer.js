import {
  SET_PRODUCTS,
  SET_FILTER,
  SET_SUGGESTION,
  TOGGLE_MODAL,
  SET_PENDING,
} from "../actions/productosActions";

const initialState = {
  listaProductos: [],
  filter: "",
  suggestions: [],
  modalIsOpen: true,
  pending: false,
};

export const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        listaProductos: action.payload.data.sort((a, b) => a.id - b.id),
      };

    case SET_PENDING:
      return {
        ...state,
        pending: action.payload,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case SET_SUGGESTION:
      return {
        ...state,
        suggestions: action.payload.sort((a, b) => a.id - b.id),
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };

    default:
      return state;
  }
};
