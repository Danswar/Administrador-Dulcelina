import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVentas,
  fetchVentasPage,
} from "../../redux/actions/ventasActions";
import BarraResumenVenta from "../BarraResumenVenta";

import ResumenVentas from "./ResumenVentas";

const Ventas = () => {
  const storeVentas = useSelector((store) => store.ventas);
  const { listaVentas, meta } = storeVentas;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVentas());
  }, [dispatch]);

  return (
    <div>
      <BarraResumenVenta />
      <ResumenVentas
        listaVentas={listaVentas}
        meta={meta}
        fetchPage={fetchVentasPage}
      />
    </div>
  );
};

export default Ventas;
