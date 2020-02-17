import {
  SET_LISTA_VENTAS,
  SET_PENDING,
  SET_SINGLE_VENTA,
  SET_VENTAS_TODAY,
  SET_GANANCIA_TODAY
} from "../actions/ventasActions";

const initialState = {
  singleVenta: {
    id: "",
    items: []
  },
  ventasToday: [],
  gananciaToday: {
    bruta: 0,
    usd: 0
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

    case SET_VENTAS_TODAY:
      return {
        ...state,
        ventasToday: action.payload
      };

    case SET_GANANCIA_TODAY:
      return {
        ...state,
        gananciaToday: action.payload
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
