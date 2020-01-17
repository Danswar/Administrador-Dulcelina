export const PRODUCTS = "[Productos]";

/* van al middleware */
export const FETCH_PRODUCTS = `${PRODUCTS} Fetch_all`;
export const FILTER_PRODUCTS = `${PRODUCTS} Filter`;
export const ADD_PRODUCT = `${PRODUCTS} Add new`;

/* van al Reducer */
export const SET_PRODUCTS = `${PRODUCTS} SET_LISTA_PRODUCTOS`;
export const SET_FILTER = `${PRODUCTS} SET_FILTER`;
export const SET_SUGGESTION = `${PRODUCTS} SET_SUGESTION`;

//--
//--
// Middleware
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS
});

export const filterProducts = params => ({
  type: FILTER_PRODUCTS,
  payload: params
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

//--
//--
// Reducers
export const setProducts = products => ({
  type: SET_PRODUCTS,
  payload: {
    data: products
  }
});

export const setFilter = params => ({
  type: SET_FILTER,
  payload: params
});

export const setSuggestion = products => ({
  type: SET_SUGGESTION,
  payload: products
});
