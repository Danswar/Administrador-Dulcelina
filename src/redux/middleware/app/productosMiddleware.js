import {
  FETCH_PRODUCTS,
  PRODUCTS,
  setProducts,
  FILTER_PRODUCTS,
  setFilter,
  setSuggestion,
  filterProducts,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  ORDER_PRODUCTS,
  toggleModal,
  DELETE_PRODUCT,
  deleteSingleProduct,
  DELETE_SINGLE_PRODUCT,
} from "../../actions/productosActions";

import {
  apiRequest,
  API_SUCCESS,
  INSERT,
  API_ERROR,
  UPDATE,
  api
} from "../../actions/apiActions";

import { PRODUCTS_ENDPOINT, PRODUCT_ENDPOINT } from "../../constats";

export const productosMiddleware = store => next => action => {
  next(action);

  const dispatch = store.dispatch;

  switch (action.type) {
    //--
    //--
    /* ACTION: pedir info al server */
    case FETCH_PRODUCTS:
      dispatch(apiRequest(null, "GET", PRODUCTS_ENDPOINT, PRODUCTS));
      break;

    //--
    //--
    /* ACTION: tipear en la barra de busqueda de productos */
    case FILTER_PRODUCTS:
      const products = store.getState().productos.listaProductos;
      const filter = action.payload ? action.payload : "";

      dispatch(setFilter(filter));

      const suggestions = products.filter(producto => {
        const regex = new RegExp(`${filter}`, "gi");
        return producto.nombre.match(regex) /* || producto.codigo.match(regex) */;
      });

      dispatch(setSuggestion(suggestions));
      break;

    //--
    //--
    /* ACTION: añadir nuevo producto */
    case ADD_PRODUCT:
      dispatch(
        apiRequest(action.payload, "POST", PRODUCT_ENDPOINT, `${PRODUCTS} ${INSERT}`)
      );
      break;

    //--
    //--
    /* ACTION: Editar un producto */
    case EDIT_PRODUCT:
      dispatch(
        apiRequest(action.payload, "POST", PRODUCT_ENDPOINT, `${PRODUCTS} ${UPDATE}`)
      );
      break

    case DELETE_PRODUCT:
      const { id } = action.payload;
      dispatch(
        api(null, "POST", `${PRODUCT_ENDPOINT}/${id}`, deleteSingleProduct)
      );
      break;

    //--
    //--
    /* ACTION: Ordenar lista */
    case ORDER_PRODUCTS:
      const orderList = store.getState().productos.listaProductos;
      const dolar_actual = store.getState().dolar.dolar_actual;
      orderList.sort((a, b) => {
        let margen_a = (a.p_venta / (a.p_costo_usd * dolar_actual) - 1) * 100
        let margen_b = (b.p_venta / (b.p_costo_usd * dolar_actual) - 1) * 100
        if (margen_a > margen_b) {
          return 1;
        } else if (margen_a < margen_b) {
          return -1;
        } else {
          return 0
        }
      });
      dispatch(setProducts(orderList));
      break


    //--
    //--
    /* EVENT: petición al server fue exitosa */
    case `${PRODUCTS} ${API_SUCCESS}`:
      dispatch(setProducts(action.payload.data));
      dispatch(filterProducts());
      break;

    //--
    //--
    /* EVENT: petición añadir nuevo al server fue exitosa */
    case `${PRODUCTS} ${INSERT} ${API_SUCCESS}`:
      const prevProducts = store.getState().productos.listaProductos;
      const nextProducts = [action.payload.data, ...prevProducts];
      dispatch(setProducts(nextProducts));
      dispatch(filterProducts());
      dispatch(toggleModal());
      break;

    //--
    //--
    /* EVENT: petición añadir nuevo al server fue exitosa */
    case `${PRODUCTS} ${UPDATE} ${API_SUCCESS}`:
      const incomeProduct = action.payload.data;
      const editProducts = store.getState().productos.listaProductos.map((item) => {
        if (item.id === incomeProduct.id) {
          return incomeProduct;
        }
        return item;
      });
      dispatch(setProducts(editProducts));
      dispatch(filterProducts());
      dispatch(toggleModal());
      break;


    //--
    //--
    /* EVENT: petición añadir nuevo al server fue exitosa */
    case DELETE_SINGLE_PRODUCT:
      const productToDelete = action.payload.data;
      const list = store.getState().productos.listaProductos.filter((product) => product.id !== productToDelete.id);
      dispatch(setProducts(list));
      dispatch(filterProducts());
      dispatch(toggleModal());
      break;


    //--
    //--
    /* EVENT: petición al server no fue exitosa */
    case `${PRODUCTS} ${API_ERROR}`:
      console.log(action.payload);
      break;

    //--
    //--
    /* EVENT: peticion de insertar nuevo no existosa */
    case `${PRODUCTS} ${INSERT} ${API_ERROR}`:
      console.log(action.payload);
      break;


    default:
      break;
  }


};
