import { combineReducers } from "redux";
import dolarReducer from "./dolarReducer";
import { productosReducer } from "./productosReducer";
import { pedidoReducer } from "./pedidoReducer";
import { ventasReducer } from "./ventasReducer";

export default combineReducers({
  //all your reducer goes here
  //example:
  // todo :  todoReducer
  dolar: dolarReducer,
  productos: productosReducer,
  pedido: pedidoReducer,
  ventas: ventasReducer
});
