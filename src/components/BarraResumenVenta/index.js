import React from "react";
import { useSelector } from "react-redux";

const BarraResumenVenta = () => {
  const dolar = useSelector((store) => store.dolar.dolar_actual);
  const { gananciaToday } = useSelector((store) => store.ventas);
  const { isLoggedIn } = useSelector((state) => state.login);

  return (
    <p className="text-left font-italic m-3 mt-4">
      {" "}
      <>
        <strong>Total bruto:</strong>{" "}
        {gananciaToday.bruta.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}Bsf
      </>
      {isLoggedIn && (
        <>
          ----- <strong>Ganancia dolarizada:</strong>{" "}
          {gananciaToday.usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")} Usd
          ----- <strong>Ganancia dolarizada en Bsf:</strong>{" "}
          {(gananciaToday.usd * dolar)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
          Bsf
        </>
      )}
    </p>
  );
};

export default BarraResumenVenta;
