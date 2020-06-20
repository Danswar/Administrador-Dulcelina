import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVentas,
  fetchVentasPage,
} from "../../redux/actions/ventasActions";

import ResumenVentas from "./ResumenVentas";

const Ventas = () => {
  const dolar = useSelector((store) => store.dolar.dolar_actual);

  const storeVentas = useSelector((store) => store.ventas);
  const { listaVentas, meta, gananciaToday } = storeVentas;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVentas());
  }, [dispatch]);

  return (
    <div>
      <p className="text-left font-italic m-3 mt-4">
        {" "}
        <strong>Total bruto:</strong>{" "}
        {gananciaToday.bruta.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}Bsf
        ----- <strong>Ganancia dolarizada:</strong>{" "}
        {gananciaToday.usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")} Usd
        ----- <strong>Ganancia dolarizada en Bsf:</strong>{" "}
        {(gananciaToday.usd * dolar)
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
        Bsf
      </p>
      <ResumenVentas
        listaVentas={listaVentas}
        meta={meta}
        fetchPage={fetchVentasPage}
      />
    </div>
  );
};

export default Ventas;
