import { SET_LISTA_VENTAS } from "../actions/ventasActions";

const initialState = {
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
  }
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

    default:
      return state;
  }
};
