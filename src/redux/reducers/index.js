import { combineReducers } from "redux";
import dolarReducer from "./dolarReducer";
import { productosReducer } from "./productosReducer";
import { pedidoReducer } from "./pedidoReducer";
import { ventasReducer } from "./ventasReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  //all your reducer goes here
  //example:
  // todo :  todoReducer
  login: loginReducer,
  dolar: dolarReducer,
  productos: productosReducer,
  pedido: pedidoReducer,
  ventas: ventasReducer,
});
