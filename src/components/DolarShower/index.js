import React from "react";
import { useSelector } from "react-redux";

import UpdateDolarForm from "./UpdateDolarForm";

const DolarShower = clasess => {
  const dolar_actual = useSelector(state => state.dolar.dolar_actual);
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return (
    <span className={clasess}>
      <i className="fas fa-dollar-sign fuente-verde"></i>{" "}
      {Number(dolar_actual)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
      Bsf/USD
      {isLoggedIn && <UpdateDolarForm />}
    </span>
  );
};

export default DolarShower;
