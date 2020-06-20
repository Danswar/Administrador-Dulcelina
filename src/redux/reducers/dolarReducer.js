import { SET_DOLAR, SET_PENDING } from "../actions/dolarActions";

const initialState = {
  dolar_actual: localStorage.getItem("dolar")
    ? localStorage.getItem("dolar")
    : 1,
  pending: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DOLAR:
      localStorage.setItem("dolar", action.payload);
      return {
        ...state,
        dolar_actual: action.payload,
      };

    case SET_PENDING:
      return {
        ...state,
        pending: !!action.payload,
      };
    default:
      return state;
  }
}
