import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchVentas,
  fetchVentasPage
} from "../../redux/actions/ventasActions";

import InfoCard from "./InfoCard";
import TablaVentas from "./TablaVentas";

const Home = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVentas());
  }, []);

  const storeVentas = useSelector(store => store.ventas);
  const { listaVentas, meta } = storeVentas;

  return (
    <div className="container">
      <div className="row d-flex justify-content-around align-items-center mt-3 ml-3 mr-3">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>

      <TablaVentas
        listaVentas={listaVentas}
        meta={meta}
        fetchPage={fetchVentasPage}
      />
    </div>
  );
};

export default Home;
