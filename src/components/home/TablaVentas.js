import React from "react";

const TablaVentas = props => {
  return (
    <table class="table mt-2">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID venta</th>
          <th scope="col">Importe</th>
          <th scope="col">Tiempo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12</td>
          <td>502.394,00 Bsf</td>
          <td>22/12/2019 - 20:30</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablaVentas;
