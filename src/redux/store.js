import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer  from './reducers';

const initialState = {};

const middleware = [
    //the middleware goes here
]
    
const store = createStore( rootReducer , initialState , compose(
    applyMiddleware(...middleware),
    //for react devtools - TODO: Comentar al terminar
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;