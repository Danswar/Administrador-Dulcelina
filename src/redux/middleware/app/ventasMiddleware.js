import {
  FETCH_VENTAS,
  FETCH_VENTAS_PAGE,
  FETCH_SINGLE_VENTA,
  setListaVentas,
  PROCESS_VENTA,
  setPending,
  setSingleVenta,
  SET_SINGLE_VENTA
} from "../../actions/ventasActions";
import { setInicialState } from "../../actions/pedidoActions";

import { api } from "../../actions/apiActions";

import { SELLS_ENDPOINT, SELL_ENDPOINT } from "../../constats";

export const ventasMiddleware = ({ getState, dispatch }) => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_VENTAS:
      dispatch(api(null, "GET", SELLS_ENDPOINT, setListaVentas));
      break;

    case FETCH_VENTAS_PAGE:
      dispatch(
        api(
          null,
          "GET",
          `${SELLS_ENDPOINT}?page=${action.payload}`,
          setListaVentas
        )
      );
      break;

    case FETCH_SINGLE_VENTA:
      dispatch(setPending(true));
      dispatch(
        api(null, "GET", `${SELL_ENDPOINT}/${action.payload}`, setSingleVenta)
      );
      break;

    case SET_SINGLE_VENTA:
      dispatch(setPending(false));
      break;

    case PROCESS_VENTA:
      const { listaPedido, total } = getState().pedido;
      const data = {
        total: total,
        items: listaPedido.map(row => {
          return {
            product_id: row.producto.id,
            p_costo: row.producto.p_costo,
            p_costo_usd: row.producto.p_costo_usd,
            p_venta: row.producto.p_venta,
            cantidad: row.cantidad
          };
        })
      };
      dispatch(api(data, "POST", SELL_ENDPOINT, setInicialState));
      break;

    default:
      break;
  }
};
