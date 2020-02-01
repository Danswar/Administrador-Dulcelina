import {
  ADD_ROW,
  DELETE_ROW,
  SET_INITIAL_STATE
} from "../actions/pedidoActions";

const initialState = {
  listaPedido: [],
  total: 0
};

export const pedidoReducer = (state = initialState, action) => {
  let newList, total;

  switch (action.type) {
    //ACTIONS TO THE REDUCER GOES HERE
    case ADD_ROW:
      newList = [action.payload.data, ...state.listaPedido];
      total = newList.reduce(
        (sum, value) =>
          typeof value.final == "number"
            ? sum + value.final
            : sum + Number(value.final),
        0
      );
      return {
        ...state,
        listaPedido: newList,
        total: total
      };

    case DELETE_ROW:
      const id = action.payload.data;
      newList = state.listaPedido.filter(row => row.id !== id);
      total = newList.reduce(
        (sum, value) =>
          typeof value.final == "number"
            ? sum + value.final
            : sum + Number(value.final),
        0
      );
      return {
        ...state,
        listaPedido: newList,
        total: total
      };

    case SET_INITIAL_STATE:
      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
};
