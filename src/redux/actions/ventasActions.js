export const FETCH_VENTAS = "[Ventas] Fetch ventas";
export const SET_LISTA_VENTAS = "[Ventas] SET LISTA VENTAS";

//--
//--
// Al middleware
export const fetchVentas = () => ({
  type: FETCH_VENTAS
});

//--
//--
// Al reducer
export const setListaVentas = data => ({
  type: SET_LISTA_VENTAS,
  payload: data
});
