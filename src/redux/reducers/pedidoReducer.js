import {
  ADD_ROW,
  DELETE_ROW,
  SET_INITIAL_STATE,
} from "../actions/pedidoActions";

const initialState = {
  listaPedido: [],
  total: 0,
  totalUsd: 0,
};

export const pedidoReducer = (state = initialState, action) => {
  switch (action.type) {
    //ACTIONS TO THE REDUCER GOES HERE
    case ADD_ROW: {
      const newList = [action.payload.data, ...state.listaPedido];

      const total = newList.reduce(
        (sum, value) =>
          typeof value.final == "number"
            ? sum + value.final
            : sum + Number(value.final),
        0
      );
      const totalUsd = newList.reduce(
        (sum, value) =>
          typeof value.finalUsd == "number"
            ? sum + value.finalUsd
            : sum + Number(value.finalUsd),
        0
      );

      return {
        ...state,
        listaPedido: newList,
        total,
        totalUsd,
      };
    }

    case DELETE_ROW: {
      const id = action.payload.data;
      const newList = state.listaPedido.filter(row => row.id !== id);

      const total = newList.reduce(
        (sum, value) =>
          typeof value.final == "number"
            ? sum + value.final
            : sum + Number(value.final),
        0
      );

      const totalUsd = newList.reduce(
        (sum, value) =>
          typeof value.finalUsd == "number"
            ? sum + value.finalUsd
            : sum + Number(value.finalUsd),
        0
      );

      return {
        ...state,
        listaPedido: newList,
        total,
        totalUsd,
      };
    }

    case SET_INITIAL_STATE:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
