export const FETCH_VENTAS = "[Ventas] Fetch ventas";
export const FETCH_SINGLE_VENTA = "[Ventas] Fetch single venta";
export const FETCH_VENTAS_PAGE = "[Ventas] Fetch ventas page";
export const SET_LISTA_VENTAS = "[Ventas] SET LISTA VENTAS";
export const SET_SINGLE_VENTA = "[Ventas] SET SINGLE VENTAS";
export const PROCESS_VENTA = "[Ventas] Process venta";
export const CANCEL_VENTA = "[Ventas] Cancel venta";

export const SET_PENDING = "[Ventas] SET PENDING";
//--
//--
// Al middleware
export const fetchVentas = () => ({
  type: FETCH_VENTAS
});

export const fetchSingleVenta = id => ({
  type: FETCH_SINGLE_VENTA,
  payload: id
});

export const fetchVentasPage = page => ({
  type: FETCH_VENTAS_PAGE,
  payload: page
});

export const processVenta = () => ({
  type: PROCESS_VENTA
});

export const cancelVenta = id => ({
  type: CANCEL_VENTA,
  payload: id
});

//--
//--
// Al reducer
export const setListaVentas = data => ({
  type: SET_LISTA_VENTAS,
  payload: data
});

export const setSingleVenta = payload => ({
  type: SET_SINGLE_VENTA,
  payload: payload.data
});

export const setPending = state => ({
  type: SET_PENDING,
  payload: state
});
