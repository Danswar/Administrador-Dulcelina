export const PRODUCTS = "[Productos]";

export const FETCH_PRODUCTS = `${PRODUCTS} Fetch_all`;
export const SET_PRODUCTS = `${PRODUCTS} Set_all`;
export const FILTER_PRODUCTS = `${PRODUCTS} Filter`;
export const SET_SUGGESTION = `${PRODUCTS} Suggestion`;

export const fetchProducts = query => ({
  type: FETCH_PRODUCTS,
  payload: {
    data: query
  }
});

export const setProducts = products => ({
  type: SET_PRODUCTS,
  payload: {
    data: products
  }
});

export const filterProducts = params => ({
  type: FILTER_PRODUCTS,
  payload: {
    data: params
  }
});

export const suggestionProducts = params => ({
  type: SET_SUGGESTION,
  payload: {
    data: params
  }
});
