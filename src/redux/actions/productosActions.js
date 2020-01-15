export const PRODUCTS ="[Productos]"

export const FETCH_PRODUCTS = `${PRODUCTS} Fetch_all`;
export const SET_PRODUCTS = `${PRODUCTS} Set_all`;

export const fetchProducts = (query) => ({
  type: FETCH_PRODUCTS,
  payload:{
    data:query
  }
});

export const setProducts = (products) =>({
  type: SET_PRODUCTS,
  payload:{
    data: products
  }
});
