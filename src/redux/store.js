import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

import thunk from "redux-thunk";
import { appMidleware } from "./middleware/app";
import { apiMiddleware } from "./middleware/core/apiMiddleware";

const initialState = {};

const middleware = [
  //the middleware goes here
  thunk,
  ...appMidleware,
  apiMiddleware
];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    /* //for react devtools - */
    /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), */
  )
);

export default store;
