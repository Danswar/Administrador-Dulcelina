import { combineReducers } from 'redux';
import dolarReducer from './dolarReducer';
import productosReducer from './productosReducer';


export default combineReducers({
    //all your reducer goes here
    //example:
    // todo :  todoReducer
    dolar: dolarReducer,
    productos: productosReducer

});
