import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchVentas } from "../../redux/actions/ventasActions";

import InfoCard from "./InfoCard";
import TablaVentas from "./TablaVentas";

const Home = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVentas());
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-around align-items-center mt-3 ml-3 mr-3">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>

      <div className="row mt-3 ml-3 mr-3">
        <h4>
          Ultimas ventas <small>Sucursal Dulcelina "La Churuata"</small>
        </h4>
        <TablaVentas />
      </div>
    </div>
  );
};

export default Home;
