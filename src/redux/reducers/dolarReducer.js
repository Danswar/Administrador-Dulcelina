import { SET_DOLAR } from "../actions/dolarActions";

const initialState = {
  dolar_actual: localStorage.getItem("dolar")
    ? localStorage.getItem("dolar")
    : 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_DOLAR:
      localStorage.setItem("dolar", action.payload);
      return {
        ...state,
        dolar_actual: action.payload
      };
    default:
      return state;
  }
}
