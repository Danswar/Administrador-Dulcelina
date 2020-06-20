import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchVentasToday } from "../../redux/actions/ventasActions";
import { fetchProducts } from "../../redux/actions/productosActions";

import InfoCard from "./InfoCard";
import TablaVentas from "../ventas/TablaVentas";

const Home = () => {
  const dispatch = useDispatch();

  /* TODO: hacer fetch de ventas del dia y de productos aqui*/
  useEffect(() => {
    dispatch(fetchVentasToday());
    dispatch(fetchProducts());
  }, [dispatch]);

  const storeVentas = useSelector((store) => store.ventas);
  const { ventasToday } = storeVentas;

  const listaProductos = useSelector((store) => store.productos.listaProductos);

  const dolar = useSelector((store) => store.dolar.dolar_actual);

  return (
    <div className="container">
      <div className="row d-flex justify-content-around align-items-center mt-3 ml-3 mr-3">
        <InfoCard
          classIcon="fas fa-cart-plus icon-card fuente-ok"
          title="Ventas el dia de hoy"
          number={ventasToday.reduce((total, item) => {
            return item.anulado ? total : total + 1;
          }, 0)}
        />
        <InfoCard
          classIcon="fas fa-exclamation-triangle icon-card fuente-warning"
          title="Productos con bajo stock"
          number={listaProductos.reduce((total, item) => {
            return item.stock_min > item.stock ? total + 1 : total;
          }, 0)}
        />
        <InfoCard
          classIcon="fas fa-chart-area  icon-card fuente-danger"
          title="Precios desactualizado"
          number={listaProductos.reduce((total, item) => {
            let margen = (item.p_venta / (item.p_costo_usd * dolar) - 1) * 100;
            return margen < item.margen_min ? total + 1 : total;
          }, 0)}
        />
      </div>

      <TablaVentas listaVentas={ventasToday} />
    </div>
  );
};

export default Home;
