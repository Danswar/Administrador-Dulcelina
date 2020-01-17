import {
  FETCH_PRODUCTS,
  PRODUCTS,
  setProducts,
  FILTER_PRODUCTS,
  setFilter,
  setSuggestion,
  filterProducts,
  ADD_PRODUCT,
  fetchProducts
} from "../../actions/productosActions";
import {
  apiRequest,
  API_SUCCESS,
  INSERT,
  API_ERROR
} from "../../actions/apiActions";
import { PRODUCTS_ENDPOINT, PRODUCT_ENDPOINT } from "../../constats";
/* import { setLoader } from "../../actions/uiActions"; */

export const productosMiddleware = store => next => action => {
  next(action);

  const dispatch = store.dispatch;

  switch (action.type) {
    //--
    //--
    /* ACTION: pedir info al server */
    case FETCH_PRODUCTS:
      dispatch(apiRequest(null, "GET", PRODUCTS_ENDPOINT, PRODUCTS));
      /* dispatch(setLoader(true)); */
      break;

    //--
    //--
    /* ACTION: tipear en la barra de busqueda de productos */
    case FILTER_PRODUCTS:
      const filter = action.payload ? action.payload : "";
      dispatch(setFilter(filter));

      const products = store.getState().productos.listaProductos;
      const suggestions = products.filter(producto => {
        const regex = new RegExp(`^${filter}`, "gi");
        return producto.nombre.match(regex) || producto.codigo.match(regex);
      });
      console.log(suggestions);
      dispatch(setSuggestion(suggestions));
      break;

    //--
    //--
    /* ACTION: añadir nuevo producto */
    case ADD_PRODUCT:
      dispatch(
        apiRequest(
          action.payload,
          "POST",
          PRODUCT_ENDPOINT,
          `${PRODUCTS} ${INSERT}`
        )
      );
      break;

    //--
    //--
    /* EVENT: petición al server fue exitosa */
    case `${PRODUCTS} ${API_SUCCESS}`:
      dispatch(setProducts(action.payload.data));
      dispatch(filterProducts());
      /* dispatch(setLoader(false)); */
      break;

    case `${PRODUCTS} ${INSERT} ${API_ERROR}`:
      console.log(action.payload);
      /* dispatch(setLoader(false)); */
      break;

    //--
    //--
    /* EVENT: petición añadir nuevo al server fue exitosa */
    case `${PRODUCTS} ${INSERT} ${API_SUCCESS}`:
      dispatch(fetchProducts());
      /* dispatch(setLoader(false)); */
      break;

    default:
      break;
  }
};
