import {
  SET_LISTA_VENTAS,
  SET_PENDING,
  SET_SINGLE_VENTA
} from "../actions/ventasActions";

const initialState = {
  singleVenta: {
    id: "",
    items: []
  },
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

    case SET_SINGLE_VENTA:
      return {
        ...state,
        singleVenta: action.payload
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
