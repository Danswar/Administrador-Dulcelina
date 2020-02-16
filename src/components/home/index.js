import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchVentasToday } from "../../redux/actions/ventasActions";
import { fetchProducts } from "../../redux/actions/productosActions";

import InfoCard from "./InfoCard";
import TablaVentas from "../ventas/TablaVentas";

const Home = props => {
  const dispatch = useDispatch();

  /* TODO: hacer fetch de ventas del dia y de productos aqui*/
  useEffect(() => {
    dispatch(fetchVentasToday());
    dispatch(fetchProducts());
  }, [dispatch]);

  const storeVentas = useSelector(store => store.ventas);
  const { ventasToday } = storeVentas;

  return (
    <div className="container">
      <div className="row d-flex justify-content-around align-items-center mt-3 ml-3 mr-3">
        <InfoCard
          classIcon="fas fa-cart-plus icon-card fuente-ok"
          title="Ventas en el ultimo mes"
          number="--"
        />
        <InfoCard
          classIcon="fas fa-exclamation-triangle icon-card fuente-warning"
          title="Productos con bajo stock"
          number="--"
        />
        <InfoCard
          classIcon="fas fa-chart-area  icon-card fuente-danger"
          title="Precios desactualizado"
          number="--"
        />
      </div>

      <TablaVentas listaVentas={ventasToday} />
    </div>
  );
};

export default Home;
