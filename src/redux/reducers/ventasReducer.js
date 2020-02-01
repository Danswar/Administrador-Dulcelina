import { SET_LISTA_VENTAS, SET_PENDING } from "../actions/ventasActions";

const initialState = {
  singleVenta: {},
  listaVentas: [],
  links: {
    first: "",
    last: "",
    prev: "",
    next: ""
  },
  meta: {
    current_page: "",
    last_page: "",
    per_page: "",
    total: ""
  },
  pending: false
};

export const ventasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTA_VENTAS:
      const { data, links, meta } = action.payload;
      return {
        ...state,
        listaVentas: data,
        links: links,
        meta: meta
      };

    case SET_PENDING:
      return {
        ...state,
        pending: action.payload
      };

    default:
      return state;
  }
};
